import {
  useBreakpointValue,
  Avatar,
  Link,
  Icon,
  IconButton,
  extendTheme
} from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { Flex, Text } from '@chakra-ui/react'

import React, { useState, useEffect } from 'react'

import { Sidebar } from '../components/Sidebar'
import { ImMenu } from 'react-icons/im'
import { useSidebarDrawer } from '../contexts/SidebarDrawerContext'
import { CardPageInfo } from '../components/PageInfoComponents/CardPageInfo'
import { ChartPageInfo } from '../components/PageInfoComponents/ChartPageInfo'
import { CardInfoEditabled } from '../components/PageInfoComponents/CardInfoEditabled'
import { CardDiet } from '../components/PageInfoComponents/CardDiet'

export default function Infos() {
  const breakpoints = createBreakpoints({
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    xl2: '1279px',
    g: '1600px'
  })
  const theme = extendTheme({ breakpoints })

  const [editField, setEditField] = useState(false)

  function handleClick() {
    setEditField(true)
  }

  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: true,
    xl: false
  })

  const avatarSize = useBreakpointValue({ base: 'md', sm: 'md' })

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
          overflowX="hidden"
          margin="0"
          ml={1}
          marginRight={1}
          bg="chartreuse"
        >
          <Flex height="50%" width="100%">
            <Flex flexDirection="column" width="33%">
              <CardPageInfo />
              <CardInfoEditabled a="a" />
            </Flex>
            <ChartPageInfo />
          </Flex>
          <Flex height="45%" width="100%">
            <CardDiet />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
