import { Flex } from '@chakra-ui/react'
import Router from 'next/router'
import { useEffect, useContext } from 'react'
import AuthContext from '../contexts/AuthContext'
import { GetServerSideProps } from 'next'
import { withSSRAuth } from '../utils/withSSRAuth'

export default function Home() {
  const { isAuthenticated } = useContext(AuthContext)
  useEffect(() => {
    if (isAuthenticated) {
      Router.push('/dashboard')
    } else {
      Router.push('/login')
    }
  }, [isAuthenticated])

  return <Flex w="100vw" h="100vh"></Flex>
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async (ctx) => {
    return {
      props: {}
    }
  }
)
