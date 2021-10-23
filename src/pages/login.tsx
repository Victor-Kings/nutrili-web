import {
  Flex,
  Text,
  Input,
  Button,
  Stack,
  Image,
  Alert,
  Link as LinkChakra,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  CloseButton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent
} from '@chakra-ui/react'
import { useState, useContext, useEffect, useRef } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'

import googleIcon from '@iconify/icons-grommet-icons/google'

import { Icon } from '@iconify/react'

import Link from 'next/link'
import AuthContext from '../contexts/AuthContext'
import Router from 'next/router'

export default function Login() {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const handleChangeEmail = (event) => setEmail(event.target.value)
  const handleChangePassword = (event) => setPassword(event.target.value)
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = useRef()

  const { signIn, isAuthenticated } = useContext(AuthContext)
  useEffect(() => {
    if (isAuthenticated) {
      Router.push('/dashboard')
    }
  }, [isAuthenticated])

  const handlerSendData = async () => {
    const status = await signIn(email, password)
    if (status) setIsOpen(true)
  }

  return (
    <Flex justifyContent="flex-end">
      <Flex w={['0%', '0%', '66%']}>
        <Image src="/icons/nutricionista.png" />
      </Flex>

      <Flex
        w={['100%', '100%', '34%']}
        minW="300px"
        bgColor="blue.200"
        h="100vh"
        justifyContent="center"
        alignItems="start"
      >
        <Flex alignItems="center" flexDir="column">
          <Flex justifyContent="center" pt={['15%', '40%']}>
            <Image
              src="/icons/Logo.png"
              width={[120, 140, 140]}
              height={[120, 140, 140]}
              maxW="140px"
              maxH="140px"
              bg="blue.300"
              color="white"
              border="2px solid white"
              borderRadius="50%"
            />
          </Flex>

          <Text
            fontWeight="semibold"
            color="white"
            textAlign="center"
            fontSize={[14, 16, 18]}
            fontFamily="heading"
            pt="20%"
          >
            Faça Seu Login
          </Text>

          <Stack spacing={2}>
            <Input
              placeholder="email"
              _placeholder={{ color: 'blue.10' }}
              name="email"
              type="email"
              focusBorderColor="blue.110"
              bgColor="blue.110"
              variant="filled"
              _hover={{ color: 'blue.110' }}
              size="lg"
              onChange={handleChangeEmail}
            />

            <Input
              placeholder="senha"
              _placeholder={{ color: 'blue.10' }}
              name="password"
              type="password"
              focusBorderColor="blue.110"
              bgColor="blue.110"
              variant="filled"
              _hover={{ color: 'blue.110' }}
              size="lg"
              onChange={handleChangePassword}
            />
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="blue"
            variant="ghost"
            bg="white"
            width="100%"
            onClick={handlerSendData}
          >
            Entrar
          </Button>

          <Text
            fontWeight="medium"
            color="white"
            textAlign="center"
            fontSize="16px"
            fontFamily="heading"
            pt="4%"
          >
            Esqueci minha senha
          </Text>

          <Link href="/registration">
            <LinkChakra
              fontWeight="medium"
              color="white"
              textAlign="center"
              fontSize="20px"
              fontFamily="heading"
              pt="18%"
              pb="2%"
            >
              Cadastrar
            </LinkChakra>
          </Link>
          <Text
            fontWeight="medium"
            color="white"
            textAlign="center"
            fontSize="16px"
            fontFamily="heading"
            pb="5%"
          >
            -ou entrar com-
          </Text>

          <Flex width="100%" justifyContent="space-between">
            <Button
              leftIcon={<Icon icon={googleIcon} style={{ fontSize: '28px' }} />}
              type="submit"
              colorScheme="blue"
              variant="ghost"
              bg="white"
              width="calc(45% + 8px)"
            >
              Entrar
            </Button>

            <Button
              leftIcon={<FacebookIcon style={{ fontSize: '33px' }} />}
              type="submit"
              colorScheme="blue"
              variant="ghost"
              bg="white"
              width="calc(45% + 8px)"
            >
              Entrar
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogContent backgroundColor="transparent" shadow="none">
            <AlertDialogBody width="25vw" alignSelf="center">
              <Alert status="error" borderRadius="5px">
                <AlertIcon />
                <Box flex="1">
                  <AlertTitle>Erro!</AlertTitle>
                  <AlertDescription display="block">
                    Credencial inválida!
                  </AlertDescription>
                </Box>
                <CloseButton
                  position="absolute"
                  right="8px"
                  top="8px"
                  ref={cancelRef}
                  onClick={onClose}
                />
              </Alert>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialog>
      </>
    </Flex>
  )
}
