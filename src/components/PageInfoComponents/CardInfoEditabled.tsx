import { useState, useEffect } from 'react'
import {
  Text,
  Flex,
  ButtonGroup,
  IconButton,
  Grid,
  NumberInput,
  Box,
  NumberInputField
} from '@chakra-ui/react'
import { CheckIcon, EditIcon } from '@chakra-ui/icons'
interface ICardInfoEditabledProps {
  a: string
}
interface IDataInfos {
  height?: string
  weigth?: string
  IMC?: string
}

const MockData = {
  height: '1.2',
  weigth: '70',
  IMC: '43'
}
export function CardInfoEditabled({ a }: ICardInfoEditabledProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [dataInfos, setDataInfos] = useState<IDataInfos>(null)
  console.log(dataInfos)

  useEffect(() => {
    setDataInfos(MockData)
  }, [])

  function EditableControls() {
    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton
          aria-label="Search database"
          icon={<CheckIcon />}
          onClick={() => {
            setIsEditing(false)
          }}
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          aria-label="Search database"
          size="sm"
          icon={<EditIcon />}
          onClick={() => {
            setIsEditing(true)
          }}
        />
      </Flex>
    )
  }

  return (
    <Flex
      backgroundColor="white"
      h="280px"
      mr="2%"
      ml="2%"
      mt={{ base: '', lg: '25px' }}
      pt={{ base: '', lg: '25px' }}
      borderRadius="5px"
      justifyContent="flex-start"
      flexDir="column"
      alignItems="center"
      maxW="440px"
    >
      <Flex justifyContent="space-between" width="100%" paddingX="5%">
        <Text color="#494949" fontWeight="bold" fontSize="24px">
          Informações:
        </Text>
        <EditableControls />
      </Flex>
      <Flex justifyContent="space-between" width="100%" paddingX="5%" mt="5%">
        {!isEditing ? (
          <Grid
            width="100%"
            templateColumns="repeat(2, 1fr)"
            templateRows="repeat(2, 1fr)"
            gap={1}
          >
            <Box w="100%" h="10" alignContent="center">
              <Flex height="100%" alignItems="center">
                <Text color="gray.400">Altura: {dataInfos?.height}</Text>
                <Text color="gray.400" pl="1%">
                  cm
                </Text>
              </Flex>
            </Box>
            <Box w="100%" h="10" alignContent="center">
              <Flex height="100%" alignItems="center">
                <Text color="gray.400">Peso: {dataInfos?.weigth}</Text>
                <Text color="gray.400" pl="1%">
                  Kg
                </Text>
              </Flex>
            </Box>
            <Box w="100%" h="10" alignContent="center">
              <Flex height="100%" alignItems="center">
                <Text color="gray.400">IMC: {dataInfos?.IMC}</Text>
              </Flex>
            </Box>
          </Grid>
        ) : (
          <Grid
            width="100%"
            templateColumns="repeat(2, 1fr)"
            templateRows="repeat(2, 1fr)"
            gap={1}
          >
            <Box w="100%" h="10">
              <Flex alignItems="center">
                <Text color="gray.400">Altura:</Text>
                <NumberInput value={dataInfos?.height}>
                  <NumberInputField
                    color="gray.400"
                    pl="2%"
                    onChange={(event) =>
                      setDataInfos({ ...dataInfos, height: event.target.value })
                    }
                  />
                </NumberInput>
              </Flex>
            </Box>
            <Box w="100%" h="10">
              <Flex alignItems="center">
                <Text color="gray.400">Peso:</Text>
                <NumberInput value={dataInfos?.weigth}>
                  <NumberInputField
                    color="gray.400"
                    pl="2%"
                    value={dataInfos?.weigth}
                    onChange={(event) =>
                      setDataInfos({ ...dataInfos, weigth: event.target.value })
                    }
                  />
                </NumberInput>
              </Flex>
            </Box>
            <Box w="100%" h="10">
              <Flex alignItems="center">
                <Text color="gray.400">IMC:</Text>
                <NumberInput value={dataInfos?.IMC}>
                  <NumberInputField
                    color="gray.400"
                    pl="2%"
                    value={dataInfos?.IMC}
                    onChange={(event) =>
                      setDataInfos({ ...dataInfos, IMC: event.target.value })
                    }
                  />
                </NumberInput>
              </Flex>
            </Box>
          </Grid>
        )}
      </Flex>
    </Flex>
  )
}
