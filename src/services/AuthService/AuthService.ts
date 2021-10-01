import { AxiosResponse } from 'axios'
import { apiBackend, apiBackendAuthenticated } from '../../configs/api'
import { LOCAL_STORAGE_AUTH_TOKEN } from '../../configs/const'
import {
  IAuthenticationToken,
  IAuthServiceProps,
  IIsRegister,
  IResponseAuthToken
} from './AuthService.interface'

export class AuthService implements IAuthServiceProps {
  sendNumberToReceiverSMSToken = async (
    phoneNumber: string
  ): Promise<AxiosResponse> =>
    apiBackend.post('/user/smsToken', null, {
      params: { phone: phoneNumber },
      headers: { AOBARIZATION: process.env.AUTH_AOBARIZATION }
    })

  authenticate = async (
    phoneNumber: string,
    smsToken: string
  ): Promise<IResponseAuthToken> => {
    const formData = this.mapToFormData(phoneNumber, smsToken)

    const { data } = await apiBackend.post<IResponseAuthToken>(
      '/oauth/token',
      formData,
      {
        headers: {
          Authorization: process.env.AUTH_AUTHORIZATION
        }
      }
    )
    return data
  }

  verifyIsUser = async (token: string): Promise<IIsRegister> => {
    const { data } = await apiBackendAuthenticated.get<IIsRegister>(
      '/user/isNewUser',
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return data
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
