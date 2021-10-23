import { IClientData } from '../../services/getClientsService/getClientsService.interface'
export interface ISearchBar {
  clients: IClientData[]
  numberOfPage: number
  onHandleSearch: (value: IClientData[], numberOfPage: number) => void
  page: number
}
