import { useRef } from 'react'
import {
  Flex,
  Text,
  Input,
  Button,
  Checkbox,
  FormControl
} from '@chakra-ui/react'
import { IDefaultStep } from './DesaultStep.interface'
import { useForm } from 'react-hook-form'

export default function DefaultStep({
  showPassword,
  show,
  checkedItems,
  handlerNextStep
}: IDefaultStep) {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting }
  } = useForm()
  function onSubmit(values) {
    handlerNextStep(values, true)
  }
  const password = useRef({})
  password.current = watch('password', '')
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
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
            id="name"
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
            {...register('name', {
              required: 'O nome é obrigatório',
              minLength: { value: 4, message: 'Tamanho minimo deve ser 4' }
            })}
          />

          <Input
            placeholder="Sobrenome"
            _placeholder={{ color: 'blue.10' }}
            name="Last_Name"
            id="Last_Name"
            type="text"
            focusBorderColor="blue.110"
            bgColor="blue.110"
            variant="filled"
            mt={['15px', '0']}
            _hover={{ color: 'blue.110' }}
            width={['100%', '38%']}
            height={['40px', '60px']}
            {...register('Last_Name', {
              required: 'O Sobrenome é obrigatório',
              minLength: { value: 4, message: 'Tamanho minimo deve ser 4' }
            })}
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
            id="email"
            type="email"
            focusBorderColor="blue.110"
            bgColor="blue.110"
            variant="filled"
            _hover={{ color: 'blue.110' }}
            width="100%"
            height={['40px', '60px']}
            {...register('email', {
              required: 'This is required'
            })}
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
            name="password"
            id="password"
            type={show ? 'text' : 'password'}
            focusBorderColor="blue.110"
            bgColor="blue.110"
            variant="filled"
            _hover={{ color: 'blue.110' }}
            width={['100%', '49%']}
            height={['40px', '60px']}
            {...register('password', {
              required: 'Senha é obrigatório',
              minLength: {
                value: 8,
                message: 'Senha deve ter mais de 8 caracteres'
              }
            })}
          />
          <Input
            placeholder="Confirmar senha"
            _placeholder={{ color: 'blue.10' }}
            name="password_repeat"
            id="password_repeat"
            type={show ? 'text' : 'password'}
            focusBorderColor="blue.110"
            bgColor="blue.110"
            variant="filled"
            mt={['15px', '0px']}
            _hover={{ color: 'blue.110' }}
            width={['100%', '49%']}
            height={['40px', '60px']}
            {...register('password_repeat', {
              validate: (value) =>
                value === password.current || 'Senhas devem ser identicas'
            })}
          />
        </Flex>
        {errors.password && <p>{errors.password.message}</p>}
        {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
        <Flex flexDir="row" justifyContent="flex-start" w="100%" pt="15px">
          <Checkbox isChecked={checkedItems} onChange={(e) => showPassword(e)}>
            Mostrar senha
          </Checkbox>
        </Flex>
      </FormControl>
      <Button
        type="submit"
        mt="6"
        colorScheme="blue"
        variant="ghost"
        bg="white"
        width="100%"
        isLoading={isSubmitting}
      >
        Próximo
      </Button>
    </form>
  )
}
