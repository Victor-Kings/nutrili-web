export interface IRegisterSchedulerProps {
  title: string
  summary: string
  startingDate: string
  endingDate: string
  startingTime: string
  endingTime: string
  everyWeek: boolean
}

export interface IMorning {
  message: string
  hour: string
}

export interface IGetSchedulers {
  daily: {
    morning: IMorning[]
    afternoon: IMorning[]
  }
}
