import {
  Box,
  useBreakpointValue,
  Avatar,
  Link,
  Icon,
  IconButton
} from '@chakra-ui/react'
import { Flex, Text } from '@chakra-ui/react'
import { Sidebar } from '../components/Sidebar'
import { MyClients } from '../interfaces/myClients.interface'
import { SearchBar } from '../components/SearchBar/SearchBar'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'
import styles from '../styles/dashboard.module.scss'
import { ImMenu } from 'react-icons/im'
import { useSidebarDrawer } from '../contexts/SidebarDrawerContext'
import List from '@material-ui/core/List'
import { MdCheckCircle } from 'react-icons/md'
import stylesList from '../styles/listClients.module.scss'
import { useState } from 'react'
import ListClients from '../components/ListClients/ListClients'

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
  const myClients: MyClients[] = [
    {
      _id: '60bd5abe07a5d6dde663c081',
      name: 'Cox Monroe',
      idade: 87,
      statusDieta: 'Atualizada',
      TempoUltimaVisita: 20
    },
    {
      _id: '60bd5abe07a5d6dde663c082',
      name: 'Daniel Souza',
      idade: 67,
      statusDieta: 'Atualizada',
      TempoUltimaVisita: 27
    },
    {
      _id: '60bd5abe07a5d6dde663c981',
      name: 'Lionel Messi',
      idade: 50,
      statusDieta: 'Desatualizada',
      TempoUltimaVisita: 29
    },
    {
      _id: '60bd5abe07a5d6dde463c081',
      name: 'Vó do Hiago',
      idade: 80,
      statusDieta: 'Atualizada',
      TempoUltimaVisita: 16
    },
    {
      _id: '60bd5abe07a5d6dde603c081',
      name: 'Tio do Vintão',
      idade: 40,
      statusDieta: 'Desatualizada',
      TempoUltimaVisita: 20
    },
    {
      _id: '60bd5abe07a5d69de663c081',
      name: 'Papagaio do Murilo',
      idade: 30,
      statusDieta: 'Atualizada',
      TempoUltimaVisita: 40
    },
    // {
    //   _id: '60bd5abe07a5d6dde643c081',
    //   name: 'Hamster do Chris',
    //   idade: 10,
    //   statusDieta: 'Atualizada',
    //   TempoUltimaVisita: 10
    // }
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

  const [retorno, setRetorno] = useState(myClients)
  
  const myFunction = (value: MyClients[]): void =>{
    setRetorno(value)
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
            marginTop="30px"
            marginLeft="10px"
            borderRadius={8}
            backgroundColor="blue.300"
            w={"95%"} 
            h={{
              base: '100vh',
              sm: '80vh',
              md: '67vh',
              xl: '72vh'
            }}
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
              <Text color="gray.200" fontSize="2xl">
                Clientes
              </Text>
              <SearchBar clients={myClients} onHandleSearch={myFunction}/>
            </Flex>
            <Flex 
            w="100%"
              backgroundColor="#F6F6F6"
              className={styles.scrollFlex}
              h={{ base: '90%', xl: '67vh' }}
            >
              <List
                component="nav"
                aria-label="main mailbox folders"
                className={stylesList.list}
              >
               <ListClients clients={retorno}/>
              </List>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}
