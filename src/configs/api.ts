import axios, { AxiosError } from 'axios'
import { collectProjectingAncestors } from 'framer-motion/types/render/dom/projection/utils'
import { parseCookies, setCookie } from 'nookies'
import { finishedSession } from '../contexts/AuthContext'
interface IAuthProps {
  access_token: string
  refresh_token: string
  isRegistered: boolean
  isRegisteredComplete: boolean
}

interface IFailed {
  onSuccess: (token: string) => void
  onFailed: (err: AxiosError) => void
}

let isRefreshing = false
let failedRequestsQueue: IFailed[] = []

const mapToFormData = (refresh_token: string) => {
  const bodyFormData = new FormData()
  bodyFormData.append('grant_type', 'refresh_token')
  bodyFormData.append('refresh_token', `${refresh_token}`)
  return bodyFormData
}

export function setupAPIClient(ctx = undefined) {
  const apiBackend = axios.create({
    baseURL: process.env.URL_BACKEND,
    headers: {
      Authorization: `bearer ${parseCookies()['auth-token']}`
    }
  })

  apiBackend.interceptors.response.use(
    (response) => {
      return response
    },
    (error: AxiosError) => {
      if (error.response.status == 401) {
        if (error.response?.data.error === 'invalid_token') {
          const refreshToken = parseCookies()['auth-refresh-token']
          const originalConfig = error.config

          const formData = mapToFormData(refreshToken)
          if (!isRefreshing) {
            apiBackend
              .post('/oauth/token', formData, {
                headers: {
                  Authorization: process.env.AUTH_AUTHORIZATION
                }
              })
              .then((response) => {
                const { access_token, refresh_token } = response.data

                setCookie(ctx, 'auth-token', access_token, {
                  maxAge: 60 * 60 * 24 * 30,
                  path: '/'
                })

                setCookie(ctx, 'auth-refresh-token', refresh_token, {
                  maxAge: 60 * 60 * 24 * 30,
                  path: '/'
                })

                apiBackend.defaults.headers[
                  'Authorization'
                ] = `Bearer ${access_token}`
                failedRequestsQueue.forEach((request) =>
                  request.onSuccess(access_token)
                )
                failedRequestsQueue = []
              })
              .catch((err) => {
                failedRequestsQueue.forEach((request) => request.onFailed(err))
                failedRequestsQueue = []

                if (process.browser) finishedSession()
              })
              .finally(() => {
                isRefreshing = false
              })
          }

          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({
              onSuccess: (token: string) => {
                originalConfig.headers['Authorization'] = `Bearer ${token}`

                resolve(apiBackend(originalConfig))
              },
              onFailed: (err: AxiosError) => {
                reject(err)
              }
            })
          })
        } else {
          if (process.browser) finishedSession()
        }
      }
      return Promise.reject(error)
    }
  )
  return apiBackend
}
