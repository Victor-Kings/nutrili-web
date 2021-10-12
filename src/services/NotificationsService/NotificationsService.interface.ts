import { AxiosResponse } from 'axios'
import { INotifications } from '../../interfaces/notifications.interface'

export interface IGetNotificationsProps {
  getNotifications: () => Promise<INotifications[]>
  sendVisualizatedNotifications: (id: string) => Promise<AxiosResponse>
}
