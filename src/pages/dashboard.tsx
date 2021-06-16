import {
  Box,
  SimpleGrid,
  useBreakpointValue,
  Avatar,
  Link,
  Icon,
  IconButton
} from '@chakra-ui/react'
import { Flex, Text } from '@chakra-ui/react'
import { Sidebar } from '../components/Sidebar'
import { Counter } from '../components/Counter'
import { IClients } from '../interfaces/clientes.interface'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'
import SimpleAccordion from '../components/NewClientsList'
import Schedule from '../components/Schedule/Schedule'
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
  const newClients: IClients[] = [
    {
      _id: '60bd5abe07a5d6dde663c081',
      name: 'Cox Monroe',
      idade: 10,
      data: '2021-06-06T12:57:37+03:00',
      cpf: '10376874381',
      endereco: 'Melrose Street, 705, Kiskimere, District Of Columbia',
      medicao: {
        altura: 171,
        imc: 23,
        medida_a: 54,
        medida_b: 16,
        peso: 99,
        medida_c: 64,
        medida_d: 84
      }
    },
    {
      _id: '60bd5abefc84f9e7a30a2042',
      name: 'Evans Stephenson',
      idade: 7,
      data: '2020-06-06T07:57:37+03:00',
      cpf: '97653984866',
      endereco: 'Williams Court, 448, Fowlerville, Hawaii',
      medicao: {
        altura: 152,
        imc: 22,
        medida_a: 35,
        medida_b: 10,
        peso: 54,
        medida_c: 73,
        medida_d: 55
      }
    },
    {
      _id: '60bd5abed90506afdb6214b1',
      name: 'Suarez Erickson',
      idade: 6,
      data: '2021-06-05T02:57:37+03:00',
      cpf: '34208120640',
      endereco: 'Canal Avenue, 197, Springdale, Maryland',
      medicao: {
        altura: 130,
        imc: 28,
        medida_a: 14,
        medida_b: 42,
        peso: 95,
        medida_c: 89,
        medida_d: 87
      }
    },
    {
      _id: '60bd5abee42b7bfdcd33a0b2',
      name: 'Velasquez Garcia',
      idade: 0,
      data: '2020-06-06T04:50:37+03:00',
      cpf: '80719511567',
      endereco: 'Gatling Place, 676, Grahamtown, Montana',
      medicao: {
        altura: 160,
        imc: 11,
        medida_a: 60,
        medida_b: 52,
        peso: 60,
        medida_c: 52,
        medida_d: 86
      }
    },
    {
      _id: '60bd5abe0a2ff3deab0e7295',
      name: 'Moses Hunter',
      idade: 2,
      data: '2020-06-06T10:00:37+03:00',
      cpf: '33232889494',
      endereco: 'Crooke Avenue, 680, Edneyville, Nevada',
      medicao: {
        altura: 113,
        imc: 16,
        medida_a: 37,
        medida_b: 59,
        peso: 74,
        medida_c: 87,
        medida_d: 72
      }
    },
    {
      _id: '60bd5abe54809f13c733410f',
      name: 'Lindsay Glass',
      idade: 4,
      data: '2021-04-06T02:57:37+03:00',
      cpf: '20831385413',
      endereco: 'Keen Court, 240, Blackgum, Minnesota',
      medicao: {
        altura: 188,
        imc: 14,
        medida_a: 21,
        medida_b: 22,
        peso: 33,
        medida_c: 36,
        medida_d: 96
      }
    },
    {
      _id: '60bd5abe5522aa43a43b06d0',
      name: 'Renee Cummings',
      idade: 7,
      data: '2021-06-06T03:57:37+03:00',
      cpf: '25113641039',
      endereco: 'Brooklyn Road, 287, Jackpot, Pennsylvania',
      medicao: {
        altura: 154,
        imc: 17,
        medida_a: 15,
        medida_b: 51,
        peso: 37,
        medida_c: 53,
        medida_d: 100
      }
    }
  ]

  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: true,
    xl: false
  })

  const avatarSize = useBreakpointValue({ base: 'md', sm: 'md' })
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
              <Link>
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
              <Counter
                contentText="PACIENTE"
                imageName="/icons/iconPeoples.svg"
                valueData={5}
              />
              <Counter
                contentText="APROVAÇÕES PENDENTES"
                imageName="/icons/iconPeoples.svg"
                valueData={newClients.length}
              />
            </SimpleGrid>
          </SimpleGrid>
          {/* <Flex width="90vw" height="100vw"> */}
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
              >
                <SimpleAccordion clients={newClients} />
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
          {/* </Flex> */}
        </Flex>
      </Flex>
    </>
  )
}
