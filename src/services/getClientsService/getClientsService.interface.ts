import { AxiosResponse } from 'axios'
export interface IClientData {
  patientID: string
  profileIcon: string | null
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
export interface IChartData {
  label: string
  data: number[]
}
export interface IMeasure {
  height: number
  weight: number
  bmi: number
}
export interface IWeightHistoryChart {
  dates: string[]
  chartData: IChartData
}
export interface IMealChartDataDTO {
  category: string[]
  count: number[]
}

export interface IClientDataComplete {
  weightHistoryChart: IWeightHistoryChart
  measure: IMeasure
  patient: IClientData
  mealChartDataDTO: IMealChartDataDTO
}
export interface IGetClientsServiceProps {
  getClientsPagination: (
    pageNumber: number,
    asc: boolean,
    name?: string
  ) => Promise<IClientsList>

  getClient: (patientID: string) => Promise<IClientDataComplete>
  updateClient: (
    patientID: string,
    height: number,
    weigth: number
  ) => Promise<AxiosResponse>
}
