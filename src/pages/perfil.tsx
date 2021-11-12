import React, { useState, useEffect, useCallback } from 'react'
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
import { Sidebar } from '../components/Sidebar'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'
import styles from '../styles/profile.module.scss'
import { ImMenu } from 'react-icons/im'
import { useSidebarDrawer } from '../contexts/SidebarDrawerContext'
import { SimpleRating } from '../components/ratingStars'
import { EditIcon } from '@chakra-ui/icons'
import { withSSRAuth } from '../utils/withSSRAuth'
import { GetDataUserService } from '../services/GetDataUserService/GetDataUserService'
import { IUserDataComplete } from '../services/GetDataUserService/GetDataUserService.interface'

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
  const [editField, setEditField] = useState(false)
  const [clientData, setClientData] = useState<IUserDataComplete | null>(null)
  const [imageProfile, setImageProfile] = useState<any>(null);


  function handleClick() {
    setEditField(true)
  }
  const updateData = async () => {
    const response = await new GetDataUserService().updateDataUser(clientData)
    setEditField(false)
    console.log(imageProfile)
    if (imageProfile) {
      try {
        await new GetDataUserService().updateProfilePick(imageProfile);
      } catch (e) {
        console.error("erro ao atualizar imagem", e);
      }
    }
  }

  const pickImage = (event) => {
    setImageProfile(event.target.files[0]);
  };

  const fetchData = useCallback(async () => {
    try {
      const response = await new GetDataUserService().getDataUserComplete()
      setClientData(response)
    } catch (err) {
      console.log('ERRO no carregamento dos dados de profile')
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: true,
    xl: false
  })

  const avatarSize = useBreakpointValue({ base: 'md', sm: 'md' })

  return (
    <>
      {isWideVersion && clientData && (
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
                {clientData.name}
              </Text>
              <Link href="/login">
                <Text fontWeight="semibold" fontSize="14px" color="blue.10">
                  SAIR
                </Text>
              </Link>
            </Flex>
            <Avatar
              name="Dan Abrahmov"
              src={clientData?.profilePic || 'https://bit.ly/dan-abramov'}
              size={avatarSize}
              border="3px solid white"
            />
          </Flex>
        </Flex>
      )}
      {clientData && (
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
            <Box
              m="20px"
              width={{ sm: '95%', xl: '70%' }}
              overflowY="auto"
              overflowX="auto"
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
                <Flex className={styles.editBtn}>
                  <Flex className={styles.descriptionProfile}>
                    <SimpleGrid
                      maxWidth="150px"
                      minWidth="150px"
                      maxHeight="250px"
                      minHeight="150px"
                      ml="30px"
                      mt="10px"
                      mr="40px"
                      color="black"
                    >
                      <Image
                        boxSize="100%"
                        objectFit="cover"
                        src={
                          clientData?.profilePic || 'https://bit.ly/dan-abramov'
                        }
                        alt="Dan Abramov"
                      />
                    </SimpleGrid>
                    <SimpleGrid w="100%" h="150px" mt="35px">
                      <Text fontWeight="bold" fontSize="2xl" color="gray.200">
                        {clientData.name}
                      </Text>
                      <Text color="blue.200">Nutricionista</Text>
                      <Text color="gray.200">
                        CRN{clientData.crnType} - Nutricionista Definitivo
                      </Text>
                      <SimpleRating rating={clientData.score / 2} />
                    </SimpleGrid>
                  </Flex>
                  <SimpleGrid w="30px" h="30px" mt={4} mr={4} ml="auto">
                    <EditIcon
                      w={8}
                      h={8}
                      color="gray.500"
                      onClick={() => handleClick()}
                    />
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
                >
                  <SimpleGrid className={styles.dataDescript}>
                    {!editField ? (
                      <SimpleGrid>
                        <Text
                        mt="20px"
                          mb="5px"
                          ml="2%"
                          color="gray.200"
                          fontWeight="bold"
                        >
                          Consultório
                        </Text>
                        <Text mb="5px" color="gray.400">
                          Nome: {clientData.office.officeName}
                        </Text>
                        <Text mb="5px" color="gray.400">
                          Endereço: {clientData.office.street},{' '}
                          {clientData.office.number},{' '}
                          {clientData.office.neighborhood},{' '}
                          {clientData.office.city}-{clientData.office.state}
                        </Text>
                        <Text mb="5px" color="gray.400">
                          CEP: {clientData.office.cep}
                        </Text>
                        <Text mb="5px" color="gray.400">
                          Telefone: {clientData.office.officePhone}
                        </Text>
                        <Text
                          mb="5px"
                          ml="2%"
                          mt="10px"
                          color="gray.200"
                          fontWeight="bold"
                        >
                          Informações Pessoais
                        </Text>
                        <Text mb="5px" color="gray.400">
                          Nacimento: {clientData.birth}
                        </Text>
                        <Text mb="5px" color="gray.400">
                          Telefone: {clientData.phone}
                        </Text>
                        <Text color="gray.400" mb="15px">
                          Número de clientes: {clientData.numberOfPatients}
                        </Text>
                      </SimpleGrid>
                    ) : (
                      <div>
                        <Flex 
                        marginTop="15px"
                        display="flex"
                        flexDirection="row"
                        marginBottom="10px">
                        <Text
                          color="gray.300"
                          fontWeight="bold"
                          fontSize="15px"
                        >
                          Alterar imagem:
                        </Text>
                        <input type="file" onChange={pickImage} style={{fontSize: "15px", height: "50px", marginLeft:"10px"}}/> 
                        </Flex>
                        <Text
                          mb="15px"
                          ml="2%"
                          color="gray.200"
                          fontWeight="bold"
                        >
                          Consultório
                        </Text>
                        <Flex flexDirection="row" mb={4}>
                          <Flex flexDirection="row" w="90px">
                            <Text mb="0px" color="gray.400">
                              Nome:
                            </Text>
                          </Flex>
                          <Input
                            className={styles.inputData}
                            value={clientData.office.officeName}
                            onChange={(value) =>
                              setClientData({
                                ...clientData,
                                office: {
                                  ...clientData.office,
                                  officeName: value.target.value
                                }
                              })
                            }
                          />
                        </Flex>
                        <Flex flexDirection="row" mb={4}>
                          <Flex flexDirection="row" w="90px">
                            <Text m="0px" color="gray.400">
                              Endereço:
                            </Text>
                          </Flex>
                        </Flex>

                        <Flex flexDirection="row" mb={4}>
                          <Flex flexDirection="row" w="90px">
                            <Text m="0px" color="gray.400">
                              Rua:
                            </Text>
                          </Flex>
                          <Input
                            className={styles.inputData}
                            value={clientData.office.street}
                            onChange={(value) =>
                              setClientData({
                                ...clientData,
                                office: {
                                  ...clientData.office,
                                  street: value.target.value
                                }
                              })
                            }
                          />
                        </Flex>
                        <Flex flexDirection="row" mb={4}>
                          <Flex flexDirection="row" w="90px">
                            <Text m="0px" color="gray.400">
                              Número:
                            </Text>
                          </Flex>
                          <Input
                            className={styles.inputData}
                            value={clientData.office.number}
                            onChange={(value) =>
                              setClientData({
                                ...clientData,
                                office: {
                                  ...clientData.office,
                                  number: value.target.value
                                }
                              })
                            }
                          />
                          <Flex flexDirection="row" w="90px">
                            <Text m="0px" color="gray.400">
                              Bairro:
                            </Text>
                          </Flex>
                          <Input
                            className={styles.inputData}
                            value={clientData.office.neighborhood}
                            onChange={(value) =>
                              setClientData({
                                ...clientData,
                                office: {
                                  ...clientData.office,
                                  neighborhood: value.target.value
                                }
                              })
                            }
                          />
                        </Flex>
                        <Flex flexDirection="row" mb={4}>
                          <Flex flexDirection="row" w="90px">
                            <Text m="0px" color="gray.400">
                              Cidade:
                            </Text>
                          </Flex>
                          <Input
                            className={styles.inputData}
                            value={clientData.office.city}
                            onChange={(value) =>
                              setClientData({
                                ...clientData,
                                office: {
                                  ...clientData.office,
                                  city: value.target.value
                                }
                              })
                            }
                          />
                          <Flex flexDirection="row" w="90px">
                            <Text m="0px" color="gray.400">
                              Estado:
                            </Text>
                          </Flex>
                          <Input
                            className={styles.inputData}
                            value={clientData.office.state}
                            onChange={(value) =>
                              setClientData({
                                ...clientData,
                                office: {
                                  ...clientData.office,
                                  state: value.target.value
                                }
                              })
                            }
                          />
                        </Flex>
                        <Flex flexDirection="row" mb={4}>
                          <Flex flexDirection="row" w="90px">
                            <Text m="0px" color="gray.400">
                              CEP:
                            </Text>
                          </Flex>
                          <Input
                            className={styles.inputData}
                            value={clientData.office.cep}
                            onChange={(value) =>
                              setClientData({
                                ...clientData,
                                office: {
                                  ...clientData.office,
                                  cep: value.target.value
                                }
                              })
                            }
                          />
                        </Flex>
                        <Flex flexDirection="row" mb={4}>
                          <Flex flexDirection="row" w="90px">
                            <Text m="0px" color="gray.400">
                              Telefone:
                            </Text>
                          </Flex>
                          <Input
                            className={styles.inputData}
                            value={clientData.office.officePhone}
                            onChange={(value) =>
                              setClientData({
                                ...clientData,
                                office: {
                                  ...clientData.office,
                                  officePhone: value.target.value
                                }
                              })
                            }
                          />
                        </Flex>

                        <Text
                          mb="15px"
                          ml="2%"
                          mt="30px"
                          color="gray.200"
                          fontWeight="bold"
                        >
                          Informações Pessoais
                        </Text>
                        <Flex flexDirection="row" mb={4}>
                          <Flex flexDirection="row" w="90px">
                            <Text m="0px" color="gray.400">
                              Nacimento:
                            </Text>
                          </Flex>
                          <Input
                            className={styles.inputData}
                            value={clientData.birth}
                            onChange={(value) =>
                              setClientData({
                                ...clientData,
                                birth: value.target.value
                              })
                            }
                          />
                        </Flex>
                        <Flex flexDirection="row" mb={4}>
                          <Flex flexDirection="row" w="90px">
                            <Text m="0px" color="gray.400">
                              Telefone:
                            </Text>
                          </Flex>
                          <Input
                            className={styles.inputData}
                            value={clientData.phone}
                            onChange={(value) =>
                              setClientData({
                                ...clientData,
                                phone: value.target.value
                              })
                            }
                          />
                        </Flex>
                        <Text color="gray.400" mb="15px">
                          Número de clientes: {clientData.numberOfPatients}
                        </Text>
                      </div>
                    )}
                  </SimpleGrid>
                </Flex>
                {editField && (
                  <Flex flexDirection="row"marginTop="60px" ml={2} mr={2}>
                    <Button
                      w={40}
                      h={38}
                      m="auto"
                      mr="20px"
                      mb="15px"
                      backgroundColor="blue.200"
                      _hover={{ backgroundColor: 'blue.500' }}
                      onClick={() => updateData()}
                    >
                      Confirmar
                    </Button>
                    <Button
                      w={40}
                      h={38}
                      m="auto"
                      ml="0px"
                      mb="15px"
                      backgroundColor="red.400"
                      _hover={{ backgroundColor: 'red.500' }}
                      onClick={() => setEditField(false)}
                    >
                      Cancelar
                    </Button>
                  </Flex>
                )}
              </Flex>
            </Box>
          </Flex>
        </Flex>
      )}
    </>
  )
}


