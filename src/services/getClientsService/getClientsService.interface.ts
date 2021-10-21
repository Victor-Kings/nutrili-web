interface IClientData{
    patientID:string,
    profileIcon: string,
    name: string,
    status: string,
    dateOfLastMeeting:string,
}
export interface IClientsList {
    patient: IClientData[],
    lastPage: boolean,
    numberOfPages: number,
    firstPage:boolean
}
  
export interface IGetClientsServiceProps {
    getClientsPagination: (pageNumber: number, asc:boolean, name?:string) => Promise<IClientsList>
}
  