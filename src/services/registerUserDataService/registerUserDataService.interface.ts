import { AxiosResponse } from 'axios'
export interface DataUser {
  Last_Name: string
  email: string
  name: string
  password: string
  password_repeat: string
  CRN: string
  CRN_type: string
  birth: string
  city: string
  cpf: string
  gender: string
  neighborhood: string
  number: string
  phone: string
  postal_code: string
  state: string
  street: string
}

export interface IRegisterDataUserServiceProps {
  sendRegisterData: (request: DataUser) => Promise<AxiosResponse>
}

export interface IRegisterUserDataMapToRequest {
  crn: string
  crnType: string
  name: string
  gender: string
  birth: string
  phone: string
  cpf: string
  email: string
  password: string
  cep: string
  state: string
  city: string
  neighborhood: string
  street: string
  number: string
}
