import {
  Box,
  useBreakpointValue,
  Avatar,
  Link,
  Icon,
  IconButton
} from '@chakra-ui/react'
import { Flex, Text } from '@chakra-ui/react'
import React, { useState, useEffect  } from 'react';
import { Sidebar } from '../components/Sidebar'
import { INotifications } from '../interfaces/notifications.interface'
import { SearchBar } from '../components/SearchBar/SearchBar'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'
import styles from '../styles/dashboard.module.scss'
import { ImMenu } from 'react-icons/im'
import { useSidebarDrawer } from '../contexts/SidebarDrawerContext'
import SimpleAccordion from '../components/NotificationsList'
import { valueScaleCorrection } from 'framer-motion/types/render/dom/projection/scale-correction'

const breakpoints = createBreakpoints({
  tiny: '20em',
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  xl2: '90em'
})

const theme = extendTheme({ breakpoints })

export default function Dashboard() {
  const notifications: INotifications[] = [
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Vó do Hiago',
      title: 'Dieta está desatualizada',
      msg: 'A dieta do cliente fulano de tal está desatualizada',
      status: 'Nova',
      date: '2021-06-06T03:57:37+03:00',
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Papagaio do Vintão',
      title: 'Dieta está desatualizada',
      msg: 'A dieta do cliente está atualizada',
      status: 'Visualizada',
      date: '2021-04-06T02:57:37+03:00',
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Vô do Murilo',
      title: 'Dieta está desatualizada',
      msg: 'A dieta do cliente está desatualizada',
      status: 'Visualizada',
      date: '2021-08-14T16:05:37+03:00',
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Véia do 71',
      title: 'Dieta está atualizada',
      msg: 'Dieta do cliente fulano de tal, está atualizada',
      status: 'Nova',
      date: '2020-06-06T07:57:37+03:00',
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Dona florinda',
      title: 'Dieta está atualizada',
      msg: 'Dieta do cliente fulano de tal, está atualizada',
      status: 'Nova',
      date: '2021-06-06T12:57:37+03:00',
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Sistema',
      title: 'Dieta está desatualizada',
      msg: 'Cliente está solicitando mudança na dieta',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00',
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Sistema',
      title: 'Dieta está desatualizada',
      msg: 'Cliente está solicitando mudança na dieta',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00',
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Sistema',
      title: 'Dieta está desatualizada',
      msg: 'Dieta do cliente fulano de tal, está atualizada',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00',
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Sistema',
      title: 'Dieta está atualizada',
      msg: 'Dieta do cliente fulano de tal, está atualizada',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00',
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Euclides da Silva',
      title: 'Dieta está desatualizada',
      msg: 'Cliente está solicitando mudança na dieta',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00',
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Geraldo',
      title: 'Dieta está desatualizada',
      msg: 'Cliente está solicitando mudança na dieta',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00',
    }
  ]

  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: true,
    xl: false
  })

  const avatarSize = useBreakpointValue({ base: 'md', sm: 'md' })
  const iconSize = useBreakpointValue({ base: 'sm', sm: 'sm' })
  const listSize = useBreakpointValue({ base: 'xl', sm: 'xl' })
  const a = 'ASDS'

  const [count, setCount] = useState(notifications.filter( (value)=> value.status === 'Nova' ).length);
  
    
    

  return (
    <>
      {isWideVersion && (
        <Flex p="4">
          <IconButton
            _focus={{ outlineOffset: 'none', boxShadow: 'none' }}
            aria-label="Abrir navigation"
            icon={<Icon as={ImMenu} color="blue.300" />}
            fontSize="26"
            variant="unstyled"
            onClick={onOpen}
            pr="2"
          />
          <Flex width="100%" justifyContent="flex-end">
            <Flex
              flex="1"
              w="100%"
              direction="column"
              alignItems="flex-end"
              pl="10%"
              justifyContent="center"
              pr="4"
            >
              <Text fontWeight="semibold" color="blue.300" fontSize="18px">
                Joaozinho Pereira
              </Text>
              <Link href="/login">
                <Text fontWeight="semibold" fontSize="14px" color="blue.10">
                  SAIR
                </Text>
              </Link>
            </Flex>
            <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              size={avatarSize}
              border="3px solid white"
            />
          </Flex>
        </Flex>
      )}
      <Flex direction="row" h="100vh">
        <Sidebar />
        <Flex
          flex="1"
          flexDirection="column"
          mr={4}
          overflowY="scroll"
          margin="0"
          ml={1}
          marginRight={1}
        >
            <Box
            m="20px"
            width="70%"
              borderRadius={8}
              backgroundColor="white"
              h={{ base: '100vh', sm: '80vh', md: '67vh', xl: '78vh' }}
            >
              <Flex
                minHeight="60px"
                maxHeight="83px"
                height="15%"
                alignItems="center"
                pl="4%"
                borderBottom="1px"
                borderColor="gray.100"
              >
                <Text
                  color="black"
                  fontSize="2xl"
                >
                  Notificações
                </Text>
                <Text
                  color="gray.200"
                  fontSize="1xl"
                  margin="0 6% 0 auto"
                >
                 {count} Novas
                </Text>
              </Flex>
              <Flex
                backgroundColor="white"
                className={styles.scrollFlex}
                h={{ base: '90%', xl: '67vh' }}
              >
                <SimpleAccordion notifications={notifications} />
              </Flex>
            </Box>
        </Flex>
      </Flex>
    </>
  )
}
