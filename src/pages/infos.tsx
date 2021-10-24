import {
  useBreakpointValue,
  Avatar,
  Link,
  Icon,
  IconButton
} from '@chakra-ui/react'

import { Flex, Text } from '@chakra-ui/react'

import React, { useState, useEffect } from 'react'

import { Sidebar } from '../components/Sidebar'
import { ImMenu } from 'react-icons/im'
import { useSidebarDrawer } from '../contexts/SidebarDrawerContext'
import { CardPageInfo } from '../components/PageInfoComponents/CardPageInfo'
import { ChartPageInfo } from '../components/PageInfoComponents/ChartPageInfo'
import { CardInfoEditabled } from '../components/PageInfoComponents/CardInfoEditabled'

export default function Infos() {
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
        >
          <CardPageInfo />
          <ChartPageInfo />
          <CardInfoEditabled a="a" />
        </Flex>
      </Flex>
    </>
  )
}
