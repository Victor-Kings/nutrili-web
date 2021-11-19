import { IGetSchedulers } from '../../interfaces/registerScheduler.interface'

export interface IGetDataSchedulingServiceProps {
  getSchedule: () => Promise<IGetSchedulers>
}
