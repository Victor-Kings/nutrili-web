import {
  Box,
  useBreakpointValue,
  Avatar,
  Link,
  Icon,
  IconButton,
  Select
} from '@chakra-ui/react'
import { Flex, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
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
      date: '2021-06-06T03:57:37+03:00'
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Papagaio do Vintão',
      title: 'Dieta está desatualizada',
      msg: 'A dieta do cliente está atualizada',
      status: 'Visualizada',
      date: '2021-04-06T02:57:37+03:00'
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Vô do Murilo',
      title: 'Dieta está desatualizada',
      msg: 'A dieta do cliente está desatualizada',
      status: 'Visualizada',
      date: '2021-08-14T16:05:37+03:00'
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Véia do 71',
      title: 'Dieta está atualizada',
      msg: 'Dieta do cliente fulano de tal, está atualizada',
      status: 'Nova',
      date: '2020-06-06T07:57:37+03:00'
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Dona florinda',
      title: 'Dieta está atualizada',
      msg: 'Dieta do cliente fulano de tal, está atualizada',
      status: 'Nova',
      date: '2021-06-06T12:57:37+03:00'
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Sistema',
      title: 'Dieta está desatualizada',
      msg: 'Cliente está solicitando mudança na dieta',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00'
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Sistema',
      title: 'Dieta está desatualizada',
      msg: 'Cliente está solicitando mudança na dieta',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00'
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Sistema',
      title: 'Dieta está desatualizada',
      msg: 'Dieta do cliente fulano de tal, está atualizada',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00'
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Sistema',
      title: 'Dieta está atualizada',
      msg: 'Dieta do cliente fulano de tal, está atualizada',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00'
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Euclides da Silva',
      title: 'Dieta está desatualizada',
      msg: 'Cliente está solicitando mudança na dieta',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00'
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Geraldo',
      title: 'Dieta está desatualizada',
      msg: 'Cliente está solicitando mudança na dieta',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00'
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Antonio',
      title: 'Dieta está desatualizada',
      msg: 'Cliente está solicitando mudança na dieta',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00'
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Cleyde',
      title: 'Dieta está desatualizada',
      msg: 'Cliente está solicitando mudança na dieta',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00'
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Nerso',
      title: 'Dieta está desatualizada',
      msg: 'Cliente está solicitando mudança na dieta',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00'
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Plâncton',
      title: 'Dieta está desatualizada',
      msg: 'Cliente está solicitando mudança na dieta',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00'
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Nirleide',
      title: 'Dieta está desatualizada',
      msg: 'Cliente está solicitando mudança na dieta',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00'
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Cleiton',
      title: 'Dieta está desatualizada',
      msg: 'Cliente está solicitando mudança na dieta',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00'
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Japonês',
      title: 'Dieta está desatualizada',
      msg: 'Cliente está solicitando mudança na dieta',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00'
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Mirlene',
      title: 'Dieta está desatualizada',
      msg: 'Cliente está solicitando mudança na dieta',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00'
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      from: 'Clotilde',
      title: 'Dieta está desatualizada',
      msg: 'Cliente está solicitando mudança na dieta',
      status: 'Visualizada',
      date: '2021-06-06T03:57:37+03:00'
    }
  ]

  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: true,
    xl: false
  })

  const avatarSize = useBreakpointValue({ base: 'md', sm: 'md' })

  const [count, setCount] = useState(
    notifications.filter((value) => value.status === 'Nova').length
  )

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
      <Flex>
        <Sidebar />
        <Flex h="100vh" width="100%">
          <Flex
            minWidth={{ base: '90%', lg: '65%' }}
            mr={4}
            ml={{ base: 4, xl: 0 }}
            direction="column"
            justifyContent={{ base: 'unset', lg: 'unset' }}
            className={styles.client}
          >
            <Flex>
              <Text color="gray.500" fontSize="26px">
                Notificações
              </Text>
            </Flex>

            <Flex direction="column">
              <Flex
                bgColor="white"
                borderBottomWidth="2px"
                borderBottomColor="gray.50"
                width="100%"
                h="80px"
                alignItems="center"
              >
                <Text color="gray.200" fontSize="1xl" ml={6}>
                  {count} Novas
                </Text>
              </Flex>
            </Flex>

            <Flex direction="column">
              <Flex
                backgroundColor="#F6F6F6"
                w="100%"
                h={{ base: '60vh', xl: '80vh' }}
              >
                <SimpleAccordion notifications={notifications} />
              </Flex>
              <Flex alignItems="center" justifyContent="center" h="10vh"></Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
