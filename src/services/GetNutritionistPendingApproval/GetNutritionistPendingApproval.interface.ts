import { IClientsData } from '../../interfaces/clientes.interface'

export interface IGetNutritionistPendingApprovalProps {
  getApproval: (token: string) => Promise<IClientsData>

  acceptUser: (
    requestId: string,
    approval: boolean
  ) => Promise<IClientsData | Error>
}
