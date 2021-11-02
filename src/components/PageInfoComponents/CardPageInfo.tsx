import { Text, Flex, Avatar } from '@chakra-ui/react'
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
      // mr="10px"
      // ml="10px"
      // mt={{ base: '', lg: '25px' }}
      // pt={{ base: '', lg: '25px' }}
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
          Silvio Santos
        </Text>
        <Text color="#6F6F6F" fontSize="18px">
          Idade - 67
        </Text>
        <Text color="#6F6F6F" fontSize="18px">
          Situação: Dieta atualizada
          <CheckCircleIcon color="green" ml="20px" />
        </Text>
      </Flex>
    </Flex>
  )
}
