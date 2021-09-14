import { MyClients } from "../../interfaces/myClients.interface";

export interface ISearchBar {
  clients: MyClients[];
  onHandleSearch: (value: MyClients[]) => void
}
