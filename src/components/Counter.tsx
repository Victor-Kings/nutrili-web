import { Box, Text, Flex, Image } from '@chakra-ui/react'
//contentText: string, imageName: string , valueData: number

interface ICounterProps {
  contentText: string
  imageName: string
  valueData: number
}

export function Counter(props: ICounterProps) {
  return (
    <Box
      display="flex"
      flex="1"
      width="100%"
      height="98px"
      borderRadius={8}
      boxShadow="md"
      flexDirection="row"
      backgroundColor="white"
    >
      <Flex
        minWidth="98px"
        bg="blue.200"
        justifyContent="center"
        borderRadius={8}
      >
        <Image src={props.imageName} alt="me" width="56px" />
      </Flex>
      <Flex
        display="flex"
        flexDirection="column"
        justifyContent="center"
        justifySelf="center"
        alignItems="center"
        margin="auto"
      >
        <Text
          fontSize="1.6rem"
          color="gray.200"
          fontWeight="medium"
          fontFamily="heading"
        >
          {props.valueData}
        </Text>
        <Text
          fontSize="14px"
          color="gray.100"
          fontWeight="semibold"
          textAlign="center"
          fontFamily="heading"
        >
          {props.contentText}
        </Text>
      </Flex>
    </Box>
  )
}

{
  /*
                            <Box display="flex" flex="1" width="100%" height="100%" borderRadius={8} boxShadow="md" flexDirection="row" backgroundColor="white">
                                <Icon backgroundColor="green" width="96px" h="100%" borderRadius={8}/>
                                <Flex display="flex" flexDirection="column" justifyContent="center" justifySelf="center" alignItems="center" margin="auto">
                                    <Text fontSize="1.6rem" color="black" fontWeight="bold">5</Text>
                                    <Text fontSize="1.2rem" color="black" fontWeight="bold">Aprovações Pendentes</Text>
                                </Flex>
</Box>
*/
}
