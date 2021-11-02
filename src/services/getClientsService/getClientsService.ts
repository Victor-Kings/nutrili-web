import { parseCookies } from 'nookies'
import { apiBackend } from '../apiClient'
import { AxiosResponse } from 'axios'
import {
  IClientsList,
  IGetClientsServiceProps,
  IClientDataComplete
} from './getClientsService.interface'

export class GetClientsService implements IGetClientsServiceProps {
  getClientsPagination = async (
    pageNumber: number,
    asc: boolean,
    name = ''
  ): Promise<IClientsList> => {
    const { data } = await apiBackend.get('/nutritionist/getClient', {
      headers: {
        Authorization: `Bearer ${parseCookies()['auth-token']}`
      },
      params: {
        pageNumber: pageNumber,
        asc: asc,
        name: name
      }
    })
    return data
  }

  getClient = async (patientID: string): Promise<IClientDataComplete> => {
    const { data } = await apiBackend.get('/nutritionist/getPatientDashboard', {
      headers: {
        Authorization: `Bearer ${parseCookies()['auth-token']}`
      },
      params: {
        patientID: patientID
      }
    })
    return data
  }

  updateClient = async (
    patientID: string,
    height: number,
    weigth: number
  ): Promise<AxiosResponse> => {
    console.log('ENTROU')

    const { data } = await apiBackend.put(
      'nutritionist/updatePatient',
      {
        patientID: patientID,
        height: height,
        weigth: weigth
      },
      {
        headers: {
          Authorization: `Bearer ${parseCookies()['auth-token']}`
        }
      }
    )
    console.log('RESULT', data)
    return data
  }
}
