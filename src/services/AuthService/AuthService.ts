import { AxiosResponse } from 'axios'

import { apiBackend } from '../apiClient'

import { LOCAL_STORAGE_AUTH_TOKEN } from '../../configs/const'

import {
  IAuthenticationToken,
  IAuthServiceProps
} from './AuthService.interface'

export class AuthService implements IAuthServiceProps {
  login = async (email: string, password: string): Promise<AxiosResponse> => {
    const response = await apiBackend.post(
      '/oauth/token',
      this.mapToFormData(email, password),
      {
        headers: {
          Authorization: process.env.AUTH_AUTHORIZATION
        }
      }
    )
    return response
  }

  logout = async (token: string): Promise<AxiosResponse> => {
    const response = await apiBackend.post('/user/logout', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log('OOOOOOOOOOOOOOOOOOOOOOOOOOO: ', response)
    return response
  }

  getCurrentToken = async (): Promise<IAuthenticationToken | null> => {
    const auth_token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)

    if (auth_token) {
      return JSON.parse(auth_token)
    }

    return null
  }

  private mapToFormData(email: string, password: string) {
    const bodyFormData = new FormData()

    bodyFormData.append('grant_type', process.env.AUTH_GRANT_TYPE)

    bodyFormData.append('username', `${email}:1`)

    bodyFormData.append('password', password)

    return bodyFormData
  }

  // private mapToFormDataInLogout(token: string) {
  //   const bodyFormData = new FormData()
  //   bodyFormData.append('Authorization', `Bearer ${token}`)

  //   return bodyFormData
  // }
}
