import {
  Flex,
  Text,
  Input,
  Button,
  Image,
  Checkbox,
  Select
} from '@chakra-ui/react'
import { useState } from 'react'
import { IDetailStep } from './DetailStep.interface'
import InputMask from 'react-input-mask'
import Link from 'next/link'
import { TextInputMask, TextInputMasked } from 'react-native-masked-text'
import { View } from 'framework7-react'
import { StylesContext } from '@material-ui/styles'
import { Style } from '@material-ui/icons'

export default function DetailStep({ handleClick }: IDetailStep) {
  const [tel, setTel] = useState('')
  const gender = ['masculino', 'feminino']
  const countryState = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'ES',
    'GO',
    'MA',
    'MG',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
    'DF'
  ]
  return (
    <>
      <Text
        fontWeight="semibold"
        color="white"
        fontSize={[14, 16, 18]}
        fontFamily="heading"
        pt="4%"
        alignSelf="start"
        pb="20px"
      >
        Vamos precisar de alguns dados iniciais!
      </Text>

      <Flex
        pb="5px"
        width="100%"
        flexDirection="row"
        alignItems="center"
        color="white"
        fontSize={[10, 12, 14]}
        fontFamily="heading"
      ></Flex>

      <Flex
        flexDir={['column', 'row']}
        width="100%"
        justifyContent="space-between"
      >
        <Flex flexDir={'column'} width={['100%', '58%']}>
          <Text>Inscrição CRN</Text>
          <Input
            _placeholder={{ color: 'blue.10' }}
            name="registrationOfCRN"
            type="text"
            focusBorderColor="blue.110"
            bgColor="blue.110"
            variant="filled"
            _hover={{ color: 'blue.110' }}
            height={['40px', '60px']}
            _focusVisible={{ color: 'blue.110', backgroundColor: 'white' }}
          />
        </Flex>
        <Flex flexDir={'column'} width={['100%', '40%']}>
          <Text> CRN tipo</Text>
          <Input
            _placeholder={{ color: 'blue.10' }}
            name="typesOfCRN"
            type="text"
            as={InputMask}
            mask="CRN9"
            maskChar={null}
            focusBorderColor="blue.110"
            bgColor="blue.110"
            variant="filled"
            mt={['15px', '0']}
            _hover={{ color: 'blue.110' }}
            height={['40px', '60px']}
            _focusVisible={{ color: 'blue.110', backgroundColor: 'white' }}
          />
        </Flex>
      </Flex>

      <Flex
        pb="5px"
        width="100%"
        flexDirection="row"
        alignItems="center"
        marginTop={['6px', '12px']}
        color="white"
        fontSize={[10, 12, 14]}
        fontFamily="heading"
      ></Flex>
      <Flex
        flexDir={['column', 'row']}
        width="100%"
        alignSelf="start"
        justifyContent="space-between"
      >
        <Flex flexDir={'column'} width={['100%', '49%']}>
          <Text> Telefone</Text>
          <Input
            _placeholder={{ color: 'blue.10' }}
            name="telephone"
            type="text"
            as={InputMask}
            maskChar={null}
            mask="(99) 99999-9999"
            focusBorderColor="blue.110"
            bgColor="blue.110"
            variant="filled"
            _hover={{ color: 'blue.110' }}
            height={['40px', '60px']}
            _focusVisible={{ color: 'blue.110', backgroundColor: 'white' }}
          />
        </Flex>
        <Flex flexDir={'column'} width={['100%', '49%']}>
          <Text>CPF</Text>
          <Input
            _placeholder={{ color: 'blue.10' }}
            name="cpf"
            type="text"
            focusBorderColor="blue.110"
            bgColor="blue.110"
            variant="filled"
            as={InputMask}
            maskChar={null}
            mask="***.***.***-**"
            mt={['15px', '0']}
            _hover={{ color: 'blue.110' }}
            height={['40px', '60px']}
            _focusVisible={{ color: 'blue.110', backgroundColor: 'white' }}
          />
        </Flex>
      </Flex>

      <Flex
        pb="5px"
        width="100%"
        flexDirection="row"
        alignItems="center"
        marginTop={['6px', '12px']}
        color="white"
        fontSize={[10, 12, 14]}
        fontFamily="heading"
      ></Flex>
      <Flex
        flexDir={['column', 'row']}
        width="100%"
        justifyContent="space-between"
      >
        <Flex flexDir={'column'} width={['100%', '50%']}>
          <Text>Gênero</Text>
          <Select
            placeholder=""
            _placeholder={{ color: 'blue.110' }}
            name="gender"
            type="text"
            focusBorderColor="blue.110"
            bgColor="blue.110"
            variant="filled"
            _hover={{ color: 'blue.110' }}
            height={['40px', '60px']}
            _focusVisible={{ color: 'blue.110', backgroundColor: 'white' }}
            bg="blue.110"
          >
            {gender.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </Select>
        </Flex>
        <Flex flexDir={'column'} width={['100%', '48%']}>
          <Text>Nascimento</Text>
          <Input
            placeholder="01/01/2001"
            _placeholder={{ color: 'blue.10' }}
            name="birth"
            type="text"
            as={InputMask}
            maskChar={null}
            mask="99/99/9999"
            focusBorderColor="blue.110"
            bgColor="blue.110"
            variant="filled"
            mt={['15px', '0']}
            _hover={{ color: 'blue.110' }}
            height={['40px', '60px']}
            _focusVisible={{ color: 'blue.110', backgroundColor: 'white' }}
            maxlength="10"
            pattern="(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/(19|20)\d{2}"
            required
          />
        </Flex>
      </Flex>

      <Flex
        pb="5px"
        width="100%"
        flexDirection="row"
        alignItems="center"
        marginTop={['6px', '12px']}
        color="white"
        fontSize={[10, 12, 14]}
        fontFamily="heading"
      ></Flex>
      <Flex
        flexDir={['column', 'row']}
        width="100%"
        alignSelf="start"
        justifyContent="space-between"
      >
        <Flex flexDir={'column'} width={['100%', '30%']}>
          <Text>CEP</Text>
          <Input
            _placeholder={{ color: 'blue.10' }}
            name="postalCode"
            type="text"
            as={InputMask}
            maskChar={null}
            mask="99999-999"
            focusBorderColor="blue.110"
            bgColor="blue.110"
            variant="filled"
            _hover={{ color: 'blue.110' }}
            height={['40px', '60px']}
            _focusVisible={{ color: 'blue.110', backgroundColor: 'white' }}
          />
        </Flex>
        <Flex flexDir={'column'} width={['100%', '46%']}>
          <Text>Rua</Text>
          <Input
            _placeholder={{ color: 'blue.10' }}
            name="street"
            type="text"
            focusBorderColor="blue.110"
            bgColor="blue.110"
            variant="filled"
            mt={['15px', '0']}
            _hover={{ color: 'blue.110' }}
            height={['40px', '60px']}
            _focusVisible={{ color: 'blue.110', backgroundColor: 'white' }}
          />
        </Flex>
        <Flex flexDir={'column'} width={['100%', '20%']}>
          <Text>Número</Text>
          <Input
            _placeholder={{ color: 'blue.10' }}
            name="number"
            type="text"
            focusBorderColor="blue.110"
            bgColor="blue.110"
            variant="filled"
            mt={['15px', '0']}
            _hover={{ color: 'blue.110' }}
            height={['40px', '60px']}
            _focusVisible={{ color: 'blue.110', backgroundColor: 'white' }}
          />
        </Flex>
      </Flex>

      <Flex
        pb="5px"
        width="100%"
        flexDirection="row"
        alignItems="center"
        marginTop={['6px', '12px']}
        color="white"
        fontSize={[10, 12, 14]}
        fontFamily="heading"
      ></Flex>
      <Flex
        flexDir={['column', 'row']}
        width="100%"
        alignSelf="start"
        justifyContent="space-between"
      >
        <Flex flexDir={'column'} width={['100%', '41%']}>
          <Text>Bairro</Text>
          <Input
            _placeholder={{ color: 'blue.10' }}
            name="neighborhood"
            type="text"
            focusBorderColor="blue.110"
            bgColor="blue.110"
            variant="filled"
            _hover={{ color: 'blue.110' }}
            height={['40px', '60px']}
            _focusVisible={{ color: 'blue.110', backgroundColor: 'white' }}
          />
        </Flex>
        <Flex flexDir={'column'} width={['100%', '41%']}>
          <Text>Cidade</Text>
          <Input
            _placeholder={{ color: 'blue.10' }}
            name="city"
            type="text"
            focusBorderColor="blue.110"
            bgColor="blue.110"
            variant="filled"
            mt={['15px', '0']}
            _hover={{ color: 'blue.110' }}
            _focusVisible={{ color: 'blue.110', backgroundColor: 'white' }}
            height={['40px', '60px']}
          />
        </Flex>
        <Flex flexDir={'column'} width={['100%', '14%']}>
          <Text>Estado</Text>
          <Select
            placeholder="UF"
            _placeholder={{ color: 'blue.110' }}
            name="state"
            type="text"
            focusBorderColor="blue.110"
            bgColor="blue.110"
            variant="filled"
            _focusVisible={{ color: 'blue.110', backgroundColor: 'white' }}
            _hover={{ color: 'blue.110' }}
            height={['40px', '60px']}
            bg="blue.110"
          >
            {countryState.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </Select>
        </Flex>
      </Flex>
      <Link href="/dashboard">
        <Button
          type="submit"
          mt="8%"
          colorScheme="blue"
          variant="ghost"
          bg="white"
          width="50%"
          height="5%"
        >
          Próxima
        </Button>
      </Link>
    </>
  )
}
