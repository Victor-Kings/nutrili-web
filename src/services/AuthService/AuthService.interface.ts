import { AxiosResponse } from 'axios'

export interface IAuthenticationToken {
  access_token: string
  refresh_token: string
  isRegister: boolean
}

export interface IResponseAuthToken {
  access_token: string
  refresh_token: string
}

export interface IIsRegister {
  newUser: boolean
  ancientPlusComplete: boolean
}
export interface IAuthServiceProps {
  login: (email: string, password: string) => Promise<AxiosResponse>
  logout: (token: string) => Promise<AxiosResponse>
}
