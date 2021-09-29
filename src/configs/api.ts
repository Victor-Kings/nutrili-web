import axios, { AxiosError } from 'axios'
import { IAuthenticationToken } from '../services/AuthService/AuthService.interface'
import { LOCAL_STORAGE_AUTH_TOKEN } from './const'
let isRefreshing = false

interface IFailed {
  onSuccess: (token: string) => void
  onFailed: (err: AxiosError) => void
}

interface IAuthProps{
  access_token: string;
  refresh_token: string;
  isRegistered:boolean;
  isRegisteredComplete: boolean;
}

let failedRequestsQueue: IFailed[] = []

export const apiRecognize = axios.create({
  baseURL: process.env.URL_IA_API
})

const getLocalToken = async () => {
  const authTokenStr = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)

  if (authTokenStr) {
    const authToken: IAuthProps = JSON.parse(authTokenStr)
    return authToken.access_token
  }
}

export const apiBackend = axios.create({
  baseURL: process.env.URL_BACKEND,
})

export const apiBackendAuthenticated = axios.create({
  baseURL: process.env.URL_BACKEND,

  headers: {
    Authorization: `Bearer ${getLocalToken}`
  }
})

apiBackendAuthenticated.interceptors.response.use(
  (response) => {
    return response
  },

  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (error.response?.data.error === 'invalid_token') {
        const auth_token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)
        const originalConfig = error.config
        if (auth_token) {
          const auth: IAuthProps = JSON.parse(auth_token)
          const formData = mapToFormData(auth.refresh_token)
          if (!isRefreshing) {
            isRefreshing = true
            apiBackendAuthenticated
              .post('/oauth/token', formData, {
                headers: {
                  Authorization: process.env.AUTH_AOBARIZATION
                }
              })
              .then(async (response) => {
                const { access_token } = response.data
                localStorage.setItem(
                  LOCAL_STORAGE_AUTH_TOKEN,
                  JSON.stringify({
                    ...auth,
                    access_token: response.data.access_token,

                    refresh_token: response.data.refresh_token
                  })
                )

                apiBackendAuthenticated.defaults.headers[
                  'Authorization'
                ] = `Bearer ${access_token}`

                failedRequestsQueue.forEach((request) =>
                  request.onSuccess(access_token)
                )
                failedRequestsQueue = []
              })

              .catch((err) => {
                console.error('falhou a reautenticação')

                failedRequestsQueue.forEach((request) => request.onFailed(err))

                failedRequestsQueue = []
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
          // deslogar usuário
        }
      }
    }
  }
)

const mapToFormData = (refresh_token: string) => {
  const bodyFormData = new FormData()

  bodyFormData.append('grant_type', process.env.AUTH_GRANT_TYPE_REFRESH)

  bodyFormData.append('refresh_token', `${refresh_token}`)

  return bodyFormData
}

export const getAccessToken = async (): Promise<string | null> => {
  const auth_token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)

  if (auth_token) {
    const auth: IAuthenticationToken = JSON.parse(auth_token)

    return auth.access_token
  }

  return null
}
