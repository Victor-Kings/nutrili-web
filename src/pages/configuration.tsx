import {
  Box,
  useBreakpointValue,
  Avatar,
  Link,
  Icon,
  IconButton,
  SimpleGrid,
  Image,
  Button
} from '@chakra-ui/react'
import { Flex, Text, Input } from '@chakra-ui/react'
import React, { useState, useEffect  } from 'react';
import { Sidebar } from '../components/Sidebar'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'
import styles from '../styles/profile.module.scss'
import { ImMenu } from 'react-icons/im'
import { useSidebarDrawer } from '../contexts/SidebarDrawerContext'
import { SimpleRating } from '../components/ratingStars'
import { EditIcon } from '@chakra-ui/icons'

const breakpoints = createBreakpoints({
  tiny: '20em',
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  xl2: '90em'
})

const theme = extendTheme({ breakpoints })

export default function Perfil() {

  const [editField, setEditField] = useState(false);

  function handleClick() {
    setEditField(true);
  }

  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: true,
    xl: false
  })

  const avatarSize = useBreakpointValue({ base: 'md', sm: 'md' })
  const iconSize = useBreakpointValue({ base: 'sm', sm: 'sm' })
  const listSize = useBreakpointValue({ base: 'xl', sm: 'xl' })
  const a = 'ASDS'
  
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
      <Flex >
        <Sidebar />
        <Flex h="100vh" width="100%"  >
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
                Configurações
              </Text>
            </Flex>
            <Flex direction="column">
              <Flex
                backgroundColor="#F6F6F6"
                w="100%"
                h={{ base: '60vh', xl: '80vh' }}
              >
                {/* CONTEUDO DA PÁGINA AQUI */}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex> 
    </>
  )
}
