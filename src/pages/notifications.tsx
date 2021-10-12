import {
  Box,
  useBreakpointValue,
  Avatar,
  Link,
  Icon,
  IconButton,
  Select
} from '@chakra-ui/react'
import { Flex, Text, Button } from '@chakra-ui/react'
import React, { useState, useEffect, useCallback, useContext } from 'react'
import { Sidebar } from '../components/Sidebar'
import { INotifications } from '../interfaces/notifications.interface'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'
import styles from '../styles/dashboard.module.scss'
import { ImMenu } from 'react-icons/im'
import { useSidebarDrawer } from '../contexts/SidebarDrawerContext'
import SimpleAccordion from '../components/NotificationsList'
import { valueScaleCorrection } from 'framer-motion/types/render/dom/projection/scale-correction'
import { NotificationsService } from '../services/NotificationsService/NotificationsService'
import AuthContext from '../contexts/AuthContext'

const breakpoints = createBreakpoints({
  tiny: '20em',
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  xl2: '90em'
})

export default function Dashboard() {
  const [notifications, setNotifications] = useState<INotifications[]>([])
  console.log('notifications', notifications)

  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: true,
    xl: false
  })

  const avatarSize = useBreakpointValue({ base: 'md', sm: 'md' })

  const count = notifications
    ? notifications.filter((value) => value.status == true).length
    : 0

  const fetchNotificationsData = useCallback(async () => {
    try {
      const response = await new NotificationsService().getNotifications()
      setNotifications(response)
    } catch (err) {
      console.error('Carregamento das notificações')
    }
  }, [])

  const { signOut, user } = useContext(AuthContext)

  const handlerLogout = () => {
    signOut()
  }

  const handlerViewNotification = async (idNotification: string) => {
    try {
      await new NotificationsService().sendVisualizatedNotifications(
        idNotification
      )
    } catch (err) {
      console.error('Envio de visualização de notificação')
    }
  }

  useEffect(() => {
    fetchNotificationsData()
  }, [fetchNotificationsData])

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
                {user?.name}
              </Text>
              <Button
                onClick={handlerLogout}
                fontWeight="semibold"
                fontSize="14px"
                color="blue.10"
                variant="link"
              >
                <Text fontWeight="semibold" fontSize="14px" color="blue.10">
                  SAIR
                </Text>
              </Button>
            </Flex>
            <Avatar
              name="Dan Abrahmov"
              src={
                user?.imgURL ||
                'https://yt3.ggpht.com/ytc/AKedOLQ6Ief26j8b1lgSA1OpXSCzJBlnlEEsWtQAfdwB=s900-c-k-c0x00ffffff-no-rj'
              }
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
                <SimpleAccordion
                  notifications={notifications}
                  handlerViewNotification={handlerViewNotification}
                  setNotifications={setNotifications}
                />
              </Flex>
              <Flex alignItems="center" justifyContent="center" h="10vh"></Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
