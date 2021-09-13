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
            width={{ sm: '95%', xl: '70%' }}
            overflowY="auto"
            overflowX="hidden"
              borderRadius={8}
              backgroundColor="white"
              h="80%"
            >
              <Flex
              borderRadius={8}
                className={styles.scrollFlex}
                h="90%"
                display="flex"
                flexDirection="column"
              >
              <Flex className={styles.editBtn} >
                <Flex
                className={styles.descriptionProfile}
                >
                  <SimpleGrid
                  maxWidth="200px"
                  minWidth="150px"
                  maxHeight="200px"
                  minHeight="200px"
                  ml="30px"
                  mt="10px"
                  mr="40px"
                  color="black"
                  >                  
                  <Image
                  boxSize="100%"
                  objectFit="cover"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  />
                  </SimpleGrid>
                  <SimpleGrid
                  w="100%"
                  h="200px"
                  mt="10px"
                  mb="60px"
                  >
                  <Text 
                    fontWeight="bold" 
                    fontSize="2xl" 
                    color="gray.200">
                      Dra. Lynda Murphy
                    </Text>
                    <Text 
                    color="blue.200">
                      Nutricionista PHD
                    </Text>
                    <Text 
                    color="gray.200">
                      CRN3 - Nutricionista Definitivo
                    </Text>
                    <SimpleRating />
                  </SimpleGrid>
                  </Flex>
                  <SimpleGrid w="30px" h="30px" mt={4} mr={4} ml='auto'>
                  <EditIcon w={8} h={8} color="gray.500" onClick={() => handleClick()}/>
                  </SimpleGrid>
                </Flex>
                <Flex
              borderRadius={8}
                className={styles.scrollFlex}
                display="flex"
                flexDirection="row"
                ml="30px"
                mb="10px"
                w="100%"
                h="100%"
                mt="10px"
              >
                <SimpleGrid
                className={styles.dataDescript}
                >

                {!editField ? (
                <SimpleGrid>
                  <Text mb="5px" ml="2%" color="gray.200" fontWeight="bold">
                    Consultório
                  </Text>
                  <Text mb="0px" color="gray.400">
                    Nome: Doutores Murphys
                  </Text>
                  <Text m="0px" color="gray.400">
                    Endereço: Rua blabla, 182 - Campinas - SP
                  </Text>
                  <Text m="0px" color="gray.400">
                    Telefone: (19) 9894-4652
                  </Text>
                  <Text mb="0px" ml="2%" mt="10px" color="gray.200" fontWeight="bold">
                    Informações Pessoais
                  </Text>
                  <Text m="0px" color="gray.400">
                    Idade: 28
                  </Text>
                  <Text m="0px" color="gray.400">
                    Telefone: (19) 9894-4652
                  </Text>
                  <Text m="0px" color="gray.400" mb="15px">
                    Número de clientes: 21
                  </Text>
                </SimpleGrid>

                ): 

                <div>
                    <Text mb="15px" ml="2%" color="gray.200" fontWeight="bold">
                    Consultório
                  </Text>
                  <Flex flexDirection='row' mb={4}>
                    <Flex flexDirection='row' w='90px'>
                      <Text mb="0px" color="gray.400">
                        Nome:
                      </Text>
                    </Flex>
                    <Input className={styles.inputData} value="Doutores Murphys"/>
                  </Flex>
                  <Flex flexDirection='row' mb={4}>
                    <Flex flexDirection='row' w='90px'>
                      <Text m="0px" color="gray.400">
                        Endereço:
                      </Text>
                    </Flex>
                    <Input className={styles.inputData} value="Rua blabla, 182 - Campinas - SP" />
                  </Flex>
                  <Flex flexDirection='row' mb={4}>
                    <Flex flexDirection='row' w='90px'>
                      <Text m="0px" color="gray.400">
                        Telefone:
                      </Text>
                    </Flex>
                    <Input className={styles.inputData} value="(19) 9894-4652" />
                  </Flex>
                  <Text mb="15px" ml="2%" mt="30px" color="gray.200" fontWeight="bold">
                    Informações Pessoais
                  </Text>
                  <Flex flexDirection='row' mb={4}>
                    <Flex flexDirection='row' w='90px'>
                      <Text m="0px" color="gray.400">
                        Idade:
                      </Text>
                    </Flex>
                    <Input className={styles.inputData} value="28" />
                  </Flex>
                  <Flex flexDirection='row' mb={4}>
                    <Flex flexDirection='row' w='90px' >
                      <Text m="0px" color="gray.400">
                        Telefone:
                      </Text>
                    </Flex>
                    <Input className={styles.inputData} value="(19) 9894-4652"/>
                  </Flex>
                  <Flex flexDirection='row' >
                    <Flex flexDirection='row' w='90px'>
                      <Text m="0px" color="gray.400">
                        Número de clientes:
                      </Text>
                    </Flex>
                    <Input className={styles.inputData} value="21" mt='0px' />
                  </Flex>
                </div>}
                </SimpleGrid>
                </Flex>
                {editField ? (
                  <Flex flexDirection='row' ml={2} mr={2}>
                      <Button w={40} h={38} m='auto' mr='20px' mb='15px' backgroundColor="blue.200" _hover={{backgroundColor: 'blue.500',}}>Confirmar</Button>
                      <Button w={40} h={38} m='auto' ml='0px' mb='15px' backgroundColor="red.400" _hover={{backgroundColor: 'red.500',}}>Cancelar</Button>
                  </Flex>
            ): null}
              </Flex>
            </Box>
            
        </Flex>
      </Flex>
    </>
  )
}
