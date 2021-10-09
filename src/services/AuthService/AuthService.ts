import { AxiosResponse } from 'axios'
import { apiBackend } from '../../configs/api'
import { LOCAL_STORAGE_AUTH_TOKEN } from '../../configs/const'
import {
  IAuthenticationToken,
  IAuthServiceProps
} from './AuthService.interface'

export class AuthService implements IAuthServiceProps {
  login = async (email: string, password: string): Promise<AxiosResponse> => {
    const a = await apiBackend.post(
      '/oauth/token',
      {
        grant_type: process.env.AUTH_GRANT_TYPE,
        username: `${email}:1`,
        password: password
      },
      {
        headers: { Authorization: process.env.AUTH_AUTHORIZATION }
      }
    )
    console.log('LOGIN', a)
    return a
  }
  async logout(): Promise<void> {}

  getCurrentToken = async (): Promise<IAuthenticationToken | null> => {
    const auth_token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)

    if (auth_token) {
      return JSON.parse(auth_token)
    }

    return null
  }

  private mapToFormData(phoneNumber: string, sms: string) {
    const bodyFormData = new FormData()
    bodyFormData.append('grant_type', process.env.AUTH_GRANT_TYPE)
    bodyFormData.append('username', `${phoneNumber}:2:${sms}`)
    bodyFormData.append('password', process.env.AUTH_PASSWORD)
    return bodyFormData
  }
}
