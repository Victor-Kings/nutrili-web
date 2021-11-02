import { Text, Flex, Avatar, Icon } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
import { TiWarning } from 'react-icons/ti'
import { CheckCircleIcon } from '@chakra-ui/icons'

interface ICardPageProps {
  image?: string
  name?: string
  age?: string
  situation?: string
}

export function CardPageInfo(props: ICardPageProps) {
  return (
    <Flex
      backgroundColor="white"
      h="100%"
      minW="300px"
      borderRadius="5px"
      justifyContent="flex-start"
      flexDir="column"
      alignItems="center"
      w="100%"
      maxW="540px"
    >
      <Avatar
        mt="10px"
        size="2xl"
        name="Silvio Santos"
        src="https://bit.ly/sage-adebayo"
      />
      <Flex
        mt="10px"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="#494949" fontWeight="bold" fontSize="24px">
          {props.name || ''}
        </Text>
        <Text color="#6F6F6F" fontSize="18px">
          Idade - {props.age || ''}
        </Text>
        <Flex>
          <Text
            color="#6F6F6F"
            fontSize={{
              base: '14px',
              lg: '18px'
            }}
          >
            Situação: Dieta {props.situation || 'Desatualizada'}
          </Text>
          {props.situation ? (
            <Icon
              as={MdCheckCircle}
              fontSize={{ base: 20, lg: 28 }}
              justifyContent="flex-start"
              bgColor="white"
              color="green"
              mr={{ base: '5px', lg: 'unset' }}
            />
          ) : (
            <Icon
              as={TiWarning}
              fontSize={{ base: 20, lg: 28 }}
              justifyContent="flex-start"
              bgColor="white"
              color="#FA931A"
              mr={{ base: '5px', lg: 'unset' }}
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}
