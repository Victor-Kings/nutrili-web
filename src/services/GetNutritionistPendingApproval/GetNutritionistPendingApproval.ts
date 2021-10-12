import { parseCookies } from 'nookies'
import { IClientsData } from '../../interfaces/clientes.interface'
import { apiBackend } from '../apiClient'
import { IGetNutritionistPendingApprovalProps } from './GetNutritionistPendingApproval.interface'

export class GetNutritionistPendingApproval
  implements IGetNutritionistPendingApprovalProps
{
  getApproval = async (): Promise<IClientsData> => {
    const { data } = await apiBackend.get(
      '/nutritionist/getNutritionistRequest',
      {
        headers: {
          Authorization: `Bearer ${parseCookies()['auth-token']}`
        }
      }
    )
    return data
  }

  acceptUser = async (
    requestId: string,
    approval: boolean
  ): Promise<IClientsData | Error> => {
    try {
      await apiBackend.post('/nutritionist/assignNutritionist', null, {
        params: {
          requestId: requestId,
          approval
        },
        headers: {
          Authorization: `Bearer ${parseCookies()['auth-token']}`
        }
      })
      const data = await this.getApproval()
      return data
    } catch (err) {
      console.log(err)
      return new Error('Erro')
    }
  }
}
