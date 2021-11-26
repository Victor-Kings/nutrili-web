import { AxiosResponse } from 'axios'
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
    await apiBackend.post('/schedule/insertAppointment', appointment, {
      headers: {
        Authorization: `Bearer ${parseCookies()['auth-token']}`
      }
    })
  }

  updateScheduling = async (
    appointment: IRegisterSchedulerProps
  ): Promise<AxiosResponse> => {
    const { data } = await apiBackend.put(
      '/schedule/updateAppointment',
      appointment,
      {
        headers: {
          Authorization: `Bearer ${parseCookies()['auth-token']}`
        }
      }
    )
    return data
  }
}
