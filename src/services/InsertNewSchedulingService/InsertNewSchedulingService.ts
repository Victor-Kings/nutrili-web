import { parseCookies } from 'nookies'
import { IRegisterSchedulerProps } from '../../interfaces/registerScheduler.interface'
import { apiBackend } from '../apiClient'
import { IInsertNewSchedulingServiceProps } from './InsertNewSchedulingService.interface'

export class InsertNewSchedulingService
  implements IInsertNewSchedulingServiceProps
{
  insertScheduling = async (
    appointment: IRegisterSchedulerProps
  ): Promise<void> => {
    console.log('AAAAAAAAAAAAAAAAAAAAAAA', appointment)
    await apiBackend.post('/schedule/insertAppointment', appointment, {
      headers: {
        Authorization: `Bearer ${parseCookies()['auth-token']}`
      }
    })
  }
}
