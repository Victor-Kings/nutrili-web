import { createContext, useState, useEffect } from 'react'
import Router from 'next/router'
import { setCookie, parseCookies, destroyCookie } from 'nookies'

import { AuthService } from '../services/AuthService/AuthService'
import { apiBackend } from '../services/apiClient'
import jwt_decode from 'jwt-decode'

interface IAuthProvider {
  loading: boolean
  signOut: () => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  isAuthenticated: boolean
  user: User
}

type User = {
  email: string
}

const AuthContext = createContext<IAuthProvider>(null)

export const finishedSession = async () => {
  try {
    const { 'auth-token': accessToken } = parseCookies()
    const sendDataLogin = new AuthService()
    await sendDataLogin.logout(accessToken)
    cleanSession()
    return
  } catch (err) {
    console.log(err)
  }
}
export const cleanSession = async () => {
  destroyCookie(undefined, 'auth-token')
  destroyCookie(undefined, 'auth-refresh-token')
  Router.push('/login')
}

let authChannel: BroadcastChannel

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User>(null)
  const [loading, setLoading] = useState(true)
  const isAuthenticated = !!user
  console.log(user)

  useEffect(() => {
    authChannel = new BroadcastChannel('auth')
    authChannel.onmessage = (message) => {
      switch (message.data) {
        case 'signOut':
          cleanSession()
          break
        case 'signIn':
          Router.push('/dashboard')
          break
        default:
          break
      }
    }
  })

  const signOut = async () => {
    try {
      finishedSession()
      authChannel.postMessage('signOut')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const { 'auth-token': accessToken } = parseCookies()

    if (accessToken) {
      const accessTokenDecoded = jwt_decode<any>(accessToken)
      setUser({ email: accessTokenDecoded.user_name })
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    const sendDataLogin = new AuthService()
    try {
      setLoading(true)
      const response = sendDataLogin.login(email, password)
      console.log(response)
      const { access_token, refresh_token } = (await response).data

      setUser({
        email
      })

      setCookie(undefined, 'auth-token', access_token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      })

      setCookie(undefined, 'auth-refresh-token', refresh_token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      })

      apiBackend.defaults.headers['Authorization'] = `Bearer ${access_token}`
      authChannel.postMessage('signIn')
      Router.push('/dashboard')
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        loading,
        signOut,
        signIn,
        isAuthenticated,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
