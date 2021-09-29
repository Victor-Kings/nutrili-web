import { Flex, Text, Input, Button, Image, Checkbox } from '@chakra-ui/react'
import { useState } from 'react'
import { IDefaultStep } from './DesaultStep.interface'
import Link from 'next/link'

export default function DefaultStep({
  handleClick,
  show,
  checkedItems
}: IDefaultStep) {
  return (
    <>
      <Text
        fontWeight="semibold"
        color="white"
        fontSize={[14, 16, 18]}
        fontFamily="heading"
        pt="10%"
        alignSelf="start"
        pb="30px"
      >
        Criar sua Conta do Nutrili
      </Text>
      <Flex
        flexDir={['column', 'row']}
        width="100%"
        justifyContent="space-between"
      >
        <Input
          placeholder="Nome"
          _placeholder={{ color: 'blue.10' }}
          name="nome"
          type="text"
          focusBorderColor="blue.110"
          bgColor="blue.110"
          variant="filled"
          _hover={{ color: 'blue.110' }}
          width={['100%', '60%']}
          height={['40px', '60px']}
        />

        <Input
          placeholder="Sobrenome"
          _placeholder={{ color: 'blue.10' }}
          name="second_name"
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
        flexDir="row"
        width="100%"
        justifyContent="space-between"
        marginTop={['15px', '30px']}
      >
        <Input
          placeholder="Email"
          _placeholder={{ color: 'blue.10' }}
          name="email"
          type="email"
          focusBorderColor="blue.110"
          bgColor="blue.110"
          variant="filled"
          _hover={{ color: 'blue.110' }}
          width="100%"
          height={['40px', '60px']}
        />
      </Flex>
      <Flex
        flexDir={['column', 'row']}
        width="100%"
        justifyContent="space-between"
        marginTop={['15px', '30px']}
      >
        <Input
          placeholder="Senha"
          _placeholder={{ color: 'blue.10' }}
          name="senha"
          type={show ? 'text' : 'password'}
          focusBorderColor="blue.110"
          bgColor="blue.110"
          variant="filled"
          _hover={{ color: 'blue.110' }}
          width={['100%', '49%']}
          height={['40px', '60px']}
        />

        <Input
          placeholder="Confirmar senha"
          _placeholder={{ color: 'blue.10' }}
          name="password"
          type={show ? 'text' : 'password'}
          focusBorderColor="blue.110"
          bgColor="blue.110"
          variant="filled"
          mt={['15px', '0px']}
          _hover={{ color: 'blue.110' }}
          width={['100%', '49%']}
          height={['40px', '60px']}
        />
      </Flex>
      <Flex flexDir="row" justifyContent="flex-start" w="100%" pt="15px">
        <Checkbox isChecked={checkedItems} onChange={(e) => handleClick(e)}>
          Mostrar senha
        </Checkbox>
      </Flex>
      <Link href="/dashboard">
        <Button
          type="submit"
          mt="6"
          colorScheme="blue"
          variant="ghost"
          bg="white"
          width="100%"
        >
          Próximo
        </Button>
      </Link>
    </>
  )
}
