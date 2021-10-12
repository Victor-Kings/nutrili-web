import { parseCookies } from 'nookies'
import { apiBackend } from '../apiClient'
import {
  IGetDataUserServiceProps,
  IUserData
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
}
