import { useEffect, useState, useCallback, useContext } from 'react'
import {
  Box,
  SimpleGrid,
  useBreakpointValue,
  Avatar,
  Icon,
  IconButton,
  Button
} from '@chakra-ui/react'
import { Flex, Text } from '@chakra-ui/react'
import { Sidebar } from '../components/Sidebar'
import { Counter } from '../components/Counter'
import { IClientsData } from '../interfaces/clientes.interface'
import SimpleAccordion from '../components/NewClientsList'
import Schedule from '../components/Schedule/Schedule'
import styles from '../styles/dashboard.module.scss'
import { ImMenu } from 'react-icons/im'
import { useSidebarDrawer } from '../contexts/SidebarDrawerContext'
import AuthContext from '../contexts/AuthContext'
import { withSSRAuth } from '../utils/withSSRAuth'
import { GetNutritionistPendingApproval } from '../services/GetNutritionistPendingApproval/GetNutritionistPendingApproval'

export default function Dashboard() {
  const clients: IClientsData = {
    numberOfPatient: 1,
    numberOfPendingRequest: 1,
    nutritionistList: []
  }
  const [clientsToApprove, setClientsToApprove] =
    useState<IClientsData>(clients)
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: true,
    xl: false
  })

  const avatarSize = useBreakpointValue({ base: 'md', sm: 'md' })
  const { signOut, user } = useContext(AuthContext)

  const myFunc = useCallback(async () => {
    try {
      const response = await new GetNutritionistPendingApproval().getApproval()
      setClientsToApprove(response)
    } catch (err) {
      console.log('ERRO no carregamento da infos')
    }
  }, [])

  useEffect(() => {
    myFunc()
  }, [myFunc])

  const handlerLogout = () => {
    signOut()
  }

  const handleClickToAccept = async (requestID: string, value: boolean) => {
    try {
      await new GetNutritionistPendingApproval().acceptUser(requestID, value)
      const response = await new GetNutritionistPendingApproval().getApproval()
      setClientsToApprove(response)
    } catch (err) {
      console.log('PROBLEMA PARA APROVAR')
    }
  }

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
                SAIR
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
          <SimpleGrid columns={2} spacingY="10px" pt={4} spacingX={4}>
            <SimpleGrid
              columns={2}
              borderRadius={8}
              maxWidth="100%"
              alignItems="center"
              minChildWidth="300px"
              spacing={4}
              pl={{ base: 2, sm: 2, xl: 0 }}
              pr={{ base: 2, sm: 2, xl: 0 }}
            >
              <Counter
                contentText={
                  clientsToApprove?.numberOfPatient > 1
                    ? 'PACIENTES'
                    : 'PACIENTE'
                }
                imageName="/icons/iconPeoples.svg"
                valueData={clientsToApprove?.numberOfPatient}
              />

              <Counter
                contentText="APROVAÇÕES PENDENTES"
                imageName="/icons/iconPendingApproves.svg"
                valueData={clientsToApprove?.numberOfPendingRequest}
              />
            </SimpleGrid>
          </SimpleGrid>

          <SimpleGrid
            columns={2}
            width={{ base: '20vw', tiny: '20vw', xl: '100vw' }}
            spacingX={4}
            spacingY={{ base: 4, sm: 4, xl: 0 }}
            justifyContent="space-evenly"
            mt={4}
            minChildWidth={{ base: '290px', sm: '400px', lg: '500px' }}
            ml={{ base: '10px' }}
            mr={{ base: '10px' }}
            pb={{ base: '100px', xl: '0px' }}
          >
            <Box
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
                  color="gray.200"
                  fontSize={{
                    base: '26px',
                    tiny: '18px',
                    sm: '22px',
                    xl: '24px'
                  }}
                >
                  Aprovações Pendentes
                </Text>
              </Flex>

              <Flex
                backgroundColor="white"
                className={styles.scrollFlex}
                h={{ base: '90%', xl: '67vh' }}
                justifyContent="center"
              >
                {clientsToApprove.nutritionistList.length > 0 ? (
                  <SimpleAccordion
                    clients={clientsToApprove}
                    handleClick={handleClickToAccept}
                  />
                ) : (
                  <Text
                    pt="10"
                    color="gray.200"
                    fontSize={{
                      base: '26px',
                      tiny: '18px',
                      sm: '22px',
                      xl: '24px'
                    }}
                  >
                    Não há clientes a ser aceito
                  </Text>
                )}
              </Flex>
            </Box>

            <Box
              borderRadius={8}
              backgroundColor="white"
              mt={{ base: '20px', xl: '0px' }}
              h={{ base: '100vh', sm: '80vh', md: '67vh', xl: '78vh' }}
            >
              <Schedule />
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})
