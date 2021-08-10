import {
  Box,
  SimpleGrid,
  useBreakpointValue,
  Avatar,
  Link,
  Icon,
  IconButton,
} from '@chakra-ui/react'
import { Flex, Text } from '@chakra-ui/react'
import { Sidebar } from '../components/Sidebar'
import { MyClients } from '../interfaces/myClients.interface'
import  { SearchBar } from '../components/SearchBar'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'
import styles from '../styles/dashboard.module.scss'
import { ImMenu } from 'react-icons/im'
import { useSidebarDrawer } from '../contexts/SidebarDrawerContext'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';



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
      _id: '60bd5abe07a5d6dde663c081',
      name: 'Daniel Souza',
      idade: 67,
      statusDieta: 'Atualizada',
      TempoUltimaVisita: 27
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      name: 'Lionel Messi',
      idade: 50,
      statusDieta: 'Desatualizada',
      TempoUltimaVisita: 29
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      name: 'Vó do Hiago',
      idade: 80,
      statusDieta: 'Atualizada',
      TempoUltimaVisita: 16
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      name: 'Tio do Vintão',
      idade: 40,
      statusDieta: 'Desatualizada',
      TempoUltimaVisita: 20
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      name: 'Papagaio do Murilo',
      idade: 30,
      statusDieta: 'Atualizada',
      TempoUltimaVisita: 40
    },
    {
      _id: '60bd5abe07a5d6dde663c081',
      name: 'Hamster do Chris',
      idade: 10,
      statusDieta: 'Atualizada',
      TempoUltimaVisita: 10
    }
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
          </SimpleGrid>
          </SimpleGrid>
          <Box
              borderRadius={8}
              backgroundColor="blue.10"
              h={{ base: '100vh', sm: '80vh', md: '67vh', xl: '72vh' }}
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
                  fontSize="2xl"
                >
                  Clientes
                </Text><SearchBar />
              </Flex>
              <Flex
                backgroundColor="white"
                className={styles.scrollFlex}
                h={{ base: '90%', xl: '67vh' }}
              >
          <List component="nav" aria-label="main mailbox folders">
          <div>
          {myClients.map((values) => (
            <ListItem button id={values._id}>
              <ListItemIcon>
              <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              border="3px solid#EBF5FF"
              size={avatarSize}
              />
              </ListItemIcon>
              <SimpleGrid
              width="100%"
              >
              <Text
              color="gray.400"
              fontSize={{
              base: '26px',
              tiny: '18px',
              sm: '22px',
              xl: '24px'
              }}
              >
            {values.name}
              </Text></SimpleGrid>
              <SimpleGrid
              width="40%"
              marginLeft="1vw"
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
                Idade - {values.idade}
              </Text></SimpleGrid>
              <SimpleGrid
              width="100%"
              marginLeft="4vw"
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
                Situação: Dieta {values.statusDieta}
              </Text>
              <Avatar
              marginLeft="0.3vw"
              name="Atualizada"
              src="https://bit.ly/dan-abramov"
              border="3px solid#EBF5FF"
              size={iconSize}
              /></SimpleGrid>
              <SimpleGrid
              width="100%"
              marginLeft="4vw"
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
                Tempo desde a última consulta presencial: {values.TempoUltimaVisita} dias
              </Text></SimpleGrid>
              </ListItem>
                ))}
                </div>
              </List>
            </Flex>
          </Box>
      </Flex>
    </Flex>



    </>
  )
}
