import { IRegisterSchedulerProps } from '../../interfaces/registerScheduler.interface'

export interface IInsertNewSchedulingServiceProps {
  insertScheduling: (appointment: IRegisterSchedulerProps) => Promise<void>
}
