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
  title: string
  summary: string
  startingDate: string
  endingDate: string
  startingTime: string
  endingTime: string
  everyWeek: boolean
  id: string
}

export interface IGetSchedulers {
  morningAppointments: IMorning[]
  afternoonAppointments: IMorning[]
}
