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
import Link from 'next/link'
import { TextInputMask, TextInputMasked } from 'react-native-masked-text'
import { View } from 'framework7-react'
import { StylesContext } from '@material-ui/styles'
import { Style } from '@material-ui/icons'

export default function DetailStep({ handleClick }: IDetailStep) {
  const [tel, setTel] = useState('')
  return (
    <>
      <Text
        fontWeight="semibold"
        color="white"
        fontSize={[14, 16, 18]}
        fontFamily="heading"
        pt="4%"
        alignSelf="start"
        pb="40px"
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
      >
        <Text>Inscrição CRN</Text>
        <Text pl="46%"> CRN tipo</Text>
      </Flex>

      <Flex
        flexDir={['column', 'row']}
        width="100%"
        justifyContent="space-between"
      >
        <Input
          _placeholder={{ color: 'blue.10' }}
          name="registrationOfCRN"
          type="text"
          focusBorderColor="blue.110"
          bgColor="blue.110"
          variant="filled"
          _hover={{ color: 'blue.110' }}
          width={['100%', '60%']}
          height={['40px', '60px']}
        />
        <Input
          _placeholder={{ color: 'blue.10' }}
          name="typesOfCRN"
          type="text"
          focusBorderColor="blue.110"
          bgColor="blue.110"
          variant="filled"
          mt={['15px', '0']}
          _hover={{ color: 'blue.110' }}
          width={['100%', '38%']}
          height={['40px', '60px']}
        />
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
      >
        <Text> Telefone</Text>
        <Text pl="31%">CPF</Text>
      </Flex>
      <Flex
        flexDir={['column', 'row']}
        width="80%"
        alignSelf="start"
        justifyContent="space-between"
      >
        <Input
          _placeholder={{ color: 'blue.10' }}
          name="telephone"
          type="text"
          focusBorderColor="blue.110"
          bgColor="blue.110"
          variant="filled"
          _hover={{ color: 'blue.110' }}
          width={['100%', '49%']}
          height={['40px', '60px']}
        />
        <Input
          _placeholder={{ color: 'blue.10' }}
          name="cpf"
          type="text"
          focusBorderColor="blue.110"
          bgColor="blue.110"
          variant="filled"
          mt={['15px', '0']}
          _hover={{ color: 'blue.110' }}
          width={['100%', '49%']}
          height={['40px', '60px']}
        />
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
      >
        <Text>Gênero</Text>
        <Text pl="43%">Nascimento</Text>
      </Flex>
      <Flex
        flexDir={['column', 'row']}
        width="100%"
        justifyContent="space-between"
      >
        <Select
          placeholder="Select option"
          _placeholder={{ color: 'blue.110' }}
          name="gender"
          type="text"
          focusBorderColor="blue.110"
          bgColor="blue.110"
          variant="filled"
          _hover={{ color: 'blue.110' }}
          width={['100%', '50%']}
          height={['40px', '60px']}
          bg="blue.110"
        >
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
        </Select>
        <Input
          placeholder="01/01/2001"
          _placeholder={{ color: 'blue.10' }}
          name="birth"
          type="text"
          focusBorderColor="blue.110"
          bgColor="blue.110"
          variant="filled"
          mt={['15px', '0']}
          _hover={{ color: 'blue.110' }}
          width={['100%', '48%']}
          height={['40px', '60px']}
          maxlength="10"
          pattern="(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/(19|20)\d{2}"
          required
        />
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
      >
        <Text>CEP</Text>
        <Text pl="28%">Rua</Text>
        <Text pl="43%">Número</Text>
      </Flex>
      <Flex
        flexDir={['column', 'row']}
        width="100%"
        alignSelf="start"
        justifyContent="space-between"
      >
        <Input
          _placeholder={{ color: 'blue.10' }}
          name="postalCode"
          type="text"
          focusBorderColor="blue.110"
          bgColor="blue.110"
          variant="filled"
          _hover={{ color: 'blue.110' }}
          width={['100%', '30%']}
          height={['40px', '60px']}
        />
        <Input
          _placeholder={{ color: 'blue.10' }}
          name="street"
          type="text"
          focusBorderColor="blue.110"
          bgColor="blue.110"
          variant="filled"
          mt={['15px', '0']}
          _hover={{ color: 'blue.110' }}
          width={['100%', '46%']}
          height={['40px', '60px']}
        />
        <Input
          _placeholder={{ color: 'blue.10' }}
          name="number"
          type="text"
          focusBorderColor="blue.110"
          bgColor="blue.110"
          variant="filled"
          mt={['15px', '0']}
          _hover={{ color: 'blue.110' }}
          width={['100%', '20%']}
          height={['40px', '60px']}
        />
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
      >
        <Text>Bairro</Text>
        <Text pl="36%">Cidade</Text>
        <Text pl="35%">Estado</Text>
      </Flex>
      <Flex
        flexDir={['column', 'row']}
        width="100%"
        alignSelf="start"
        justifyContent="space-between"
      >
        <Input
          _placeholder={{ color: 'blue.10' }}
          name="neighborhood"
          type="text"
          focusBorderColor="blue.110"
          bgColor="blue.110"
          variant="filled"
          _hover={{ color: 'blue.110' }}
          width={['100%', '41%']}
          height={['40px', '60px']}
        />
        <Input
          _placeholder={{ color: 'blue.10' }}
          name="city"
          type="text"
          focusBorderColor="blue.110"
          bgColor="blue.110"
          variant="filled"
          mt={['15px', '0']}
          _hover={{ color: 'blue.110' }}
          width={['100%', '41%']}
          height={['40px', '60px']}
        />
        <Select
          placeholder="UF"
          _placeholder={{ color: 'blue.110' }}
          name="state"
          type="text"
          focusBorderColor="blue.110"
          bgColor="blue.110"
          variant="filled"
          _hover={{ color: 'blue.110' }}
          width={['100%', '14%']}
          height={['40px', '60px']}
          bg="blue.110"
        >
          <option value="acre">AC</option>
          <option value="alagoa">AL</option>
          <option value="amapa">AP</option>
          <option value="amazonas">AM</option>
          <option value="bahia">BA</option>
          <option value="ceara">CE</option>
          <option value="espiritoSanto">ES</option>
          <option value="goias">GO</option>
          <option value="maranhao">MA</option>
          <option value="matoGrosso">MG</option>
          <option value="matoGrossoDoSul">MS</option>
          <option value="minasGerais">MG</option>
          <option value="para">PA</option>
          <option value="paraiba">PB</option>
          <option value="parana">PR</option>
          <option value="pernambuco">PE</option>
          <option value="piaui">PI</option>
          <option value="rioDeJaneiro">RJ</option>
          <option value="rioGrandeDoNorte">RN</option>
          <option value="rioGrandeDoSul">RS</option>
          <option value="rondonia">RO</option>
          <option value="roraima">RR</option>
          <option value="santaCatarina">SC</option>
          <option value="saoPaulo">SP</option>
          <option value="sergipe">SE</option>
          <option value="tocantins">TO</option>
          <option value="distritoFederal">DF</option>
        </Select>
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
