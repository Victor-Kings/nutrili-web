import { Flex } from '@chakra-ui/react'
import Router from 'next/router'
import { useEffect } from 'react'
export default function Home() {
  useEffect(() => {
    const { pathname } = Router
    if (pathname == '/') {
      Router.push('/login')
    }
  })
  return <Flex w="100vw" h="100vh"></Flex>
}
