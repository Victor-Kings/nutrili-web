import { AxiosResponse } from 'axios'
import { parseCookies } from 'nookies'
import { INotifications } from '../../interfaces/notifications.interface'
import { apiBackend } from '../apiClient'
import { IGetNotificationsProps } from './NotificationsService.interface'

export class NotificationsService implements IGetNotificationsProps {
  getNotifications = async (): Promise<INotifications[]> => {
    const { data } = await apiBackend.get('/notification/getNotification', {
      headers: {
        Authorization: `Bearer ${parseCookies()['auth-token']}`
      }
    })
    return data
  }

  sendVisualizatedNotifications = async (
    id: string
  ): Promise<AxiosResponse> => {
    const { data } = await apiBackend.put(
      '/notification/updateNotification',
      null,
      {
        params: {
          notificationId: id
        },
        headers: {
          Authorization: `Bearer ${parseCookies()['auth-token']}`
        }
      }
    )
    console.log('Service:', data)
    return data
  }
}
