import { AxiosResponse } from 'axios'

import {
  DataUser,
  IRegisterDataUserServiceProps,
  IRegisterUserDataMapToRequest
} from './registerUserDataService.interface'

import { apiBackend } from '../apiClient'

export class RegisterDataUserService implements IRegisterDataUserServiceProps {
  sendRegisterData = async (response: DataUser): Promise<AxiosResponse> => {
    const value = await apiBackend.post(
      '/user/insertUser',
      this.mapToRequest(response),
      {
        headers: {
          AOBARIZATION: process.env.AUTH_AOBARIZATION
        }
      }
    )

    return value
  }

  private mapToRequest = (request: DataUser) => {
    const phone = request.phone.replace(/[^0-9]+/g, '')

    const newValue: IRegisterUserDataMapToRequest = {
      birth: request.birth,
      name: `${request.name} ${request.Last_Name}`,
      cep: request.postal_code,
      city: request.city,
      cpf: request.cpf,
      crn: request.CRN,
      crnType: request.CRN_type,
      email: request.email,
      gender: request.gender === 'masculino' ? 'M' : 'F',
      neighborhood: request.neighborhood,
      number: request.number,
      password: request.password,
      phone: phone,
      state: request.state,
      street: request.street
    }

    return newValue
  }
}
