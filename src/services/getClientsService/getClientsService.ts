import { parseCookies } from 'nookies'
import { apiBackend } from '../apiClient'
import {
  IClientsList,
  IGetClientsServiceProps
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
}
