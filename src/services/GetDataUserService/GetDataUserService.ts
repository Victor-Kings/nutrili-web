import { AxiosAdapter, AxiosResponse } from 'axios'
import { parseCookies } from 'nookies'
import { apiBackend } from '../apiClient'
import {
  IGetDataUserServiceProps,
  IUserData,
  IUserDataComplete,
  ICardDietData
} from './GetDataUserService.interface'

export class GetDataUserService implements IGetDataUserServiceProps {
  getDataUser = async (): Promise<IUserData> => {
    const { data } = await apiBackend.get('/user/getUser', {
      headers: {
        Authorization: `Bearer ${parseCookies()['auth-token']}`
      }
    })
    return data
  }

  getDataUserComplete = async (): Promise<IUserDataComplete> => {
    const { data } = await apiBackend.get('/nutritionist/getNutritionistInfo', {
      headers: {
        Authorization: `Bearer ${parseCookies()['auth-token']}`
      }
    })
    return data
  }

  updateDataUser = async (
    userDate: IUserDataComplete
  ): Promise<IUserDataComplete> => {
    const test = mappingFields(userDate)
    console.log(test)

    const { data } = await apiBackend.put('user/updateUser', test, {
      headers: {
        Authorization: `Bearer ${parseCookies()['auth-token']}`
      }
    })
    return data
  }

  updateDataDietUser = async (
    patientID: string,
    dietData: ICardDietData[]
  ): Promise<AxiosResponse> => {
    console.log('Enviado alimento', dietData)

    const { data } = await apiBackend.put('diet/updateDiet', dietData, {
      headers: {
        Authorization: `Bearer ${parseCookies()['auth-token']}`
      },
      params: {
        patientID
      }
    })
    return data
  }
}

const mappingFields = (userDate: IUserDataComplete) => {
  const body = {
    nutritionist: true,
    phone: userDate.phone,
    officeAddress: {
      cep: userDate.office.cep,
      state: userDate.office.state,
      city: userDate.office.city,
      neighborhood: userDate.office.neighborhood,
      street: userDate.office.street,
      number: userDate.office.number,
      officeName: userDate.office.officeName,
      officePhone: userDate.office.officePhone
    },
    birth: userDate.birth
  }
  return body
}
