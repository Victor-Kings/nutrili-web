import { parseCookies } from 'nookies'
import { apiBackend } from '../apiClient'
import { IGetSchedulers } from '../../interfaces/registerScheduler.interface'
import { IGetDataSchedulingServiceProps } from './GetDataSchedulingService.interface'

export class GetDataSchedulingService
  implements IGetDataSchedulingServiceProps
{
  getSchedule = async (): Promise<IGetSchedulers> => {
    const { data } = await apiBackend.get('/schedule/getSchedule', {
      headers: {
        Authorization: `Bearer ${parseCookies()['auth-token']}`
      }
    })
    console.log(data)
    return data
  }

  sendIndexToRemove = async (appointmentId: string): Promise<void> => {
    await apiBackend.delete('/schedule/removeAppointment', {
      params: {
        appointmentId: appointmentId
      },
      headers: {
        Authorization: `Bearer ${parseCookies()['auth-token']}`
      }
    })
  }
}
