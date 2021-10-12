import { IClientsData } from '../../interfaces/clientes.interface'
import { apiBackend } from '../apiClient'
import { IGetNutritionistPendingApprovalProps } from './GetNutritionistPendingApproval.interface'

export class GetNutritionistPendingApproval
  implements IGetNutritionistPendingApprovalProps
{
  getApproval = async (token: string): Promise<IClientsData> => {
    const { data } = await apiBackend.get(
      '/nutritionist/getNutritionistRequest',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return data
  }

  acceptUser = async (
    token: string,
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
          Authorization: `Bearer ${token}`
        }
      })
      const data = await this.getApproval(token)
      return data
    } catch (err) {
      console.log(err)
      return new Error('Erro')
    }
  }
}
