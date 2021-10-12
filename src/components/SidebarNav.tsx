import {
  Avatar,
  Box,
  Stack,
  Text,
  Flex,
  Icon,
  Image,
  Link,
  Button
} from '@chakra-ui/react'

import { AiFillHome } from 'react-icons/ai'

import { BsFillPersonFill, BsFillPeopleFill } from 'react-icons/bs'

import { IoSettingsSharp } from 'react-icons/io5'
import { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'

export function SidebarNav() {
  const { signOut, user } = useContext(AuthContext)
  const handlerLogout = () => {
    signOut()
  }
  return (
    <>
      <Flex flex="1" justifyContent="center" pt="32px">
        <Image
          src="/icons/Logo.png"
          width="117px"
          height="117px"
          bg="blue.300"
          color="white"
          border="2px solid white"
          borderRadius="50%"
        />
      </Flex>

      <Flex flex="1" justifyContent="center" pt="51px" p="34px">
        <Avatar
          name="Dan Abrahmov"
          src={
            user?.imgURL ||
            'https://yt3.ggpht.com/ytc/AKedOLQ6Ief26j8b1lgSA1OpXSCzJBlnlEEsWtQAfdwB=s900-c-k-c0x00ffffff-no-rj'
          }
          width="57px"
          height="57px"
          border="3px solid white"
        />

        <Flex
          flex="1"
          w="100%"
          direction="column"
          alignItems="initial"
          pl="10%"
          justifyContent="center"
        >
          <Text fontWeight="semibold" color="white" fontSize="18px">
            {user?.name}
          </Text>

          <Button
            onClick={handlerLogout}
            fontWeight="semibold"
            fontSize="14px"
            color="blue.10"
            variant="link"
            alignSelf="flex-start"
          >
            SAIR
          </Button>
        </Flex>
      </Flex>

      <Stack spacing="12" align="flex-start" flex="1">
        <Box w="100%">
          <Stack spacing="8" align="stretch">
            <Link
              href="/dashboard"
              display="flex"
              flex="1"
              align="center"
              alignItems="center"
              _hover={{ textDecoration: 'none' }}
            >
              <Icon
                as={AiFillHome}
                fontSize={28}
                justifyContent="flex-start"
                ml="15%"
              />

              <Text
                fontWeight="medium"
                ml="5%"
                textDecoration="none"
                fontSize="1.125rem"
              >
                Home
              </Text>
            </Link>

            <Link
              href="/perfil"
              display="flex"
              flex="1"
              align="center"
              alignItems="center"
              _hover={{ textDecoration: 'none' }}
            >
              <Icon
                as={BsFillPersonFill}
                fontSize={28}
                justifyContent="flex-start"
                ml="15%"
              />

              <Text
                fontWeight="medium"
                ml="5%"
                textDecoration="none"
                fontSize="1.125rem"
              >
                Perfil
              </Text>
            </Link>

            <Link
              href="/notifications"
              display="flex"
              flex="1"
              align="center"
              alignItems="center"
              _hover={{ textDecoration: 'none' }}
            >
              <Icon
                as={AiFillHome}
                fontSize={28}
                justifyContent="flex-start"
                ml="15%"
              />

              <Text
                fontWeight="medium"
                ml="5%"
                textDecoration="none"
                fontSize="1.125rem"
              >
                Notificação
              </Text>
            </Link>

            <Link
              href="/clients"
              display="flex"
              flex="1"
              align="center"
              alignItems="center"
              _hover={{ textDecoration: 'none' }}
            >
              <Icon
                as={BsFillPeopleFill}
                fontSize={28}
                justifyContent="flex-start"
                ml="15%"
              />

              <Text
                fontWeight="medium"
                ml="5%"
                textDecoration="none"
                fontSize="1.125rem"
              >
                Clientes
              </Text>
            </Link>

            <Link
              href="/configuration"
              display="flex"
              flex="1"
              align="center"
              alignItems="center"
              _hover={{ textDecoration: 'none' }}
            >
              <Icon
                as={IoSettingsSharp}
                fontSize={28}
                justifyContent="flex-start"
                ml="15%"
              />

              <Text
                fontWeight="medium"
                ml="5%"
                textDecoration="none"
                fontSize="1.125rem"
              >
                Configuração
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </>
  )
}
