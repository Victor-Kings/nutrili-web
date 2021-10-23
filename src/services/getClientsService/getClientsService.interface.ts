export interface IClientData {
  patientID: string
  profileIcon: string
  name: string
  status: string
  dateOfLastMeeting: string
  age: string
}
export interface IClientsList {
  patientDTOList: IClientData[]
  lastPage: boolean
  numberOfPages: number
  firstPage: boolean
}

export interface IGetClientsServiceProps {
  getClientsPagination: (
    pageNumber: number,
    asc: boolean,
    name?: string
  ) => Promise<IClientsList>
}
