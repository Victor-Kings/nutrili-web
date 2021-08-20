import {
  Box,
  useBreakpointValue,
  Avatar,
  Link,
  Icon,
  IconButton,
  SimpleGrid
} from '@chakra-ui/react'
import { Flex, Text } from '@chakra-ui/react'
import React, { useState, useEffect  } from 'react';
import { Sidebar } from '../components/Sidebar'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'
import styles from '../styles/dashboard.module.scss'
import { ImMenu } from 'react-icons/im'
import { useSidebarDrawer } from '../contexts/SidebarDrawerContext'

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
            overflowY="auto"
            overflowX="hidden"
              borderRadius={8}
              backgroundColor="white"
              h="80%"
            >
              <Flex
              borderRadius={8}
                className={styles.scrollFlex}
                h="100%"
                display="flex"
                flexDirection="column"
              >
                <Flex
                borderRadius={8}
                backgroundColor="white"
                className={styles.scrollFlex}
                h="50%"
                display="flex"
                flexDirection="row"
                
              >
                <SimpleGrid
                w="30%"
                h="100%"
                m="3%"
                color="black"
                >                  
                IMAGEM DE PERFIL
                </SimpleGrid>
                <SimpleGrid
                w="100%"
                h="100%"
                m="3%"
                >
                <Text 
                  fontWeight="bold" 
                  fontSize="2xl" 
                  color="gray.200">
                    Dra. Lynda Murphy
                  </Text>
                  <Text 
                  color="gray.200">
                    Nutricionista PHD
                  </Text>
                  <Text 
                  color="gray.200">
                    CRN3 - Nutricionista Definitivo
                  </Text>
                  <Text 
                  color="gray.200">
                    Ranking
                  </Text>
                </SimpleGrid>
                </Flex>
                <Flex
              borderRadius={8}
                className={styles.scrollFlex}
                display="flex"
                flexDirection="row"
                ml="3%"
                mr="3%"
                mt="8%"
                mb="1%"
                w="100%"
                h="60%"
              >
                <SimpleGrid 
                w="70%"
                >
                  <Text m="5%" color="gray.200">
                    Consultório
                  </Text>
                  <Text m="1%" color="gray.400">
                    Nome: Doutores Murphys
                  </Text>
                  <Text m="1%" color="gray.400">
                    Endereço: Rua blabla, 182 - Campinas - SP
                  </Text>
                  <Text m="1%" color="gray.400">
                    Telefone: (19) 9894-4652
                  </Text>
                  <Text m="5%" color="gray.200">
                    Informações Pessoais
                  </Text>
                  <Text m="1%" color="gray.400">
                    Idade: 28
                  </Text>
                  <Text m="1%" color="gray.400">
                    Telefone: (19) 9894-4652
                  </Text>
                  <Text m="1%" color="gray.400" >
                    Número de clientes: 21
                  </Text>
                </SimpleGrid>
                
                </Flex>
              </Flex>
            </Box>
        </Flex>
      </Flex>
    </>
  )
}
