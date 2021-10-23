import { createContext, useState, useEffect } from 'react'
import Router from 'next/router'
import { setCookie, parseCookies, destroyCookie } from 'nookies'

import { AuthService } from '../services/AuthService/AuthService'
import { apiBackend } from '../services/apiClient'
import { GetDataUserService } from '../services/GetDataUserService/GetDataUserService'

interface IAuthProvider {
  loading: boolean
  signOut: () => Promise<void>
  signIn: (email: string, password: string) => Promise<boolean>
  isAuthenticated: boolean
  user: User
}

type User = {
  name?: string
  email?: string
  imgURL?: string
}

const AuthContext = createContext<IAuthProvider>(null)

export const finishedSession = async () => {
  try {
    const sendDataLogin = new AuthService()
    await sendDataLogin.logout(parseCookies()['auth-token'])
    cleanSession()
    return
  } catch (err) {
    console.error('Finished Session', err)
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
      await finishedSession()
      authChannel.postMessage('signOut')
    } finally {
      setLoading(false)
    }
  }

  const fetchDataUser = () => {
    const { getDataUser } = new GetDataUserService()
    getDataUser()
      .then((data) => {
        setUser({
          name: data.name,
          imgURL: data.profilePicture,
          email: data.email
        })
      })
      .catch((err) => {
        console.error('Fetch Data User', err)
      })
  }

  useEffect(() => {
    if (parseCookies()['auth-token']) {
      fetchDataUser()
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    const sendDataLogin = new AuthService()
    try {
      setLoading(true)
      const response = await sendDataLogin.login(email, password)
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

      fetchDataUser()

      authChannel.postMessage('signIn')

      Router.push('/dashboard')
    } catch (err) {
      console.error('SigIn', err)
      return true
    } finally {
      setLoading(false)
    }
    return false
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
