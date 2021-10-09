import axios, { AxiosError } from 'axios'
interface IAuthProps {
  access_token: string
  refresh_token: string
  isRegistered: boolean
  isRegisteredComplete: boolean
}

export const apiBackend = axios.create({
  baseURL: process.env.URL_BACKEND
})
