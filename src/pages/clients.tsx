import {
  useBreakpointValue,
  Avatar,
  Link,
  Icon,
  IconButton,
  Select
} from '@chakra-ui/react'
import { Flex, Text } from '@chakra-ui/react'
import { Sidebar } from '../components/Sidebar'
import { SearchBar } from '../components/SearchBar/SearchBar'
import { ImMenu } from 'react-icons/im'
import { useSidebarDrawer } from '../contexts/SidebarDrawerContext'
import { useEffect, useState } from 'react'
import ListClients from '../components/ListClients/ListClients'
import { Pagination } from '@material-ui/lab'
import styles from '../styles/client.module.scss'
import { GetClientsService } from '../services/getClientsService/getClientsService'
import { IClientData } from '../services/getClientsService/getClientsService.interface'
import { withSSRAuth } from '../utils/withSSRAuth'

export default function Dashboard() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: true,
    xl: false
  })

  const avatarSize = useBreakpointValue({ base: 'md', sm: 'md' })

  const [retorno, setRetorno] = useState([])
  const [numberOfPage, setNumberOfPage] = useState(0)
  const [ordenation, setOrdenation] = useState('')
  const [page, setPage] = useState(1)
  useEffect(() => {
    new GetClientsService()
      .getClientsPagination(1, false)
      .then((data) => {
        setRetorno(data.patientDTOList)
        setNumberOfPage(data.numberOfPages)
      })
      .catch((err) => {
        console.error('Fetch Clients data', err)
      })
  }, [])

  useEffect(() => {
    if (ordenation != '') {
      new GetClientsService()
        .getClientsPagination(page, ordenation == 'asc' ? true : false)
        .then((data) => {
          setRetorno(data.patientDTOList)
          setNumberOfPage(data.numberOfPages)
        })
        .catch((err) => {
          console.error('Fetch Clients ordenation data', err)
        })
    }
  }, [ordenation])

  const myFunction = (value: IClientData[], numberOfPage: number): void => {
    setRetorno(value)
    setNumberOfPage(numberOfPage)
  }

  const functionTest = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
    new GetClientsService()
      .getClientsPagination(page, ordenation == 'asc' ? true : false)
      .then((data) => {
        setRetorno(data.patientDTOList)
        setNumberOfPage(data.numberOfPages)
      })
      .catch((err) => {
        console.error('Fetch Clients data', err)
      })
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
      <Flex>
        <Sidebar />
        <Flex h="100vh" w="100%" overflowY="scroll">
          <Flex
            width="100%"
            mr={4}
            ml={{ base: 4, xl: 0 }}
            direction="column"
            justifyContent={{ base: 'unset', lg: 'unset' }}
            className={styles.client}
          >
            <Flex>
              <Text color="gray.500" fontSize="26px">
                Clientes
              </Text>
            </Flex>

            <Flex direction="column">
              <Flex
                bgColor="blue.300"
                width="100%"
                h="80px"
                alignItems="center"
              >
                <Select
                  w="200px"
                  h="40px"
                  placeholder="Ordenação"
                  bgColor="white"
                  color="black"
                  pl="20px"
                  onChange={(value) => setOrdenation(value.target.value)}
                >
                  <option value="asc">A-Z</option>
                  <option value="desc">Z-A</option>
                </Select>
                <SearchBar
                  page={page}
                  clients={retorno}
                  numberOfPage={numberOfPage}
                  onHandleSearch={myFunction}
                />
              </Flex>
              <Flex
                backgroundColor="#F6F6F6"
                w="100%"
                h={{ base: 'unset', lg: '100%' }}
              >
                <ListClients clients={retorno} />
              </Flex>
              <Flex alignItems="center" justifyContent="center" h="10vh">
                <Pagination
                  color="primary"
                  count={numberOfPage}
                  siblingCount={0}
                  variant="outlined"
                  shape="rounded"
                  onChange={functionTest}
                />
              </Flex>
            </Flex>
          </Flex>
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
