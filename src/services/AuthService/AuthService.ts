import { AxiosResponse } from 'axios'

import { apiBackend } from '../apiClient'

import { IAuthServiceProps } from './AuthService.interface'

export class AuthService implements IAuthServiceProps {
  login = async (email: string, password: string): Promise<AxiosResponse> => {
    let response
    try {
      response = await apiBackend.post(
        '/oauth/token',
        this.mapToFormData(email, password),
        {
          headers: {
            Authorization: process.env.AUTH_AUTHORIZATION
          }
        }
      )
      return response
    } catch (err) {
      response = err
      console.error('Login Service', err)
    }
    return null
  }

  logout = async (token: string): Promise<AxiosResponse> => {
    const response = await apiBackend.post('/user/logout', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response
  }

  private mapToFormData(email: string, password: string) {
    const bodyFormData = new FormData()

    bodyFormData.append('grant_type', process.env.AUTH_GRANT_TYPE)

    bodyFormData.append('username', `${email}:1`)

    bodyFormData.append('password', password)

    return bodyFormData
  }
}
