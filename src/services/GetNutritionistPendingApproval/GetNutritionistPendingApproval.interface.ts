import { IClientsData } from '../../interfaces/clientes.interface'

export interface IGetNutritionistPendingApprovalProps {
  getApproval: () => Promise<IClientsData>

  acceptUser: (
    requestId: string,
    approval: boolean
  ) => Promise<IClientsData | Error>
}
