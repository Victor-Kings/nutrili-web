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
import { GetClientsService } from '../../services/getClientsService/getClientsService'
interface IDataInfos {
  height?: number
  weigth?: number
  IMC?: number
  patientID?: string
}

export function CardInfoEditabled(props: IDataInfos) {
  const [isEditing, setIsEditing] = useState(false)
  const [dataInfos, setDataInfos] = useState<IDataInfos>(null)

  useEffect(() => {
    setDataInfos(props)
  }, [])

  const updateDate = async () => {
    const a = await new GetClientsService().updateClient(
      props.patientID,
      dataInfos.height,
      dataInfos.weigth
    )
    console.log(a)
  }

  function EditableControls() {
    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton
          aria-label="Check Icon"
          icon={<CheckIcon />}
          onClick={() => {
            updateDate()
            setIsEditing(false)
          }}
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          aria-label="Edit Icon"
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
      minW="300px"
      h="100%"
      w="100%"
      maxW="540px"
      borderRadius="5px"
      justifyContent="flex-start"
      flexDir="column"
      alignItems="center"
      pt="4%"
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
                <Text color="gray.400">
                  IMC: {Math.round(dataInfos?.IMC * 10) / 10}
                </Text>
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
                      setDataInfos({
                        ...dataInfos,
                        height: parseInt(event.target.value) | 0
                      })
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
                      setDataInfos({
                        ...dataInfos,
                        weigth: parseInt(event.target.value) | 0
                      })
                    }
                  />
                </NumberInput>
              </Flex>
            </Box>
            <Box w="100%" h="10" alignContent="center">
              <Flex height="100%" alignItems="center">
                <Text color="gray.400">IMC: {dataInfos?.IMC}</Text>
              </Flex>
            </Box>
          </Grid>
        )}
      </Flex>
    </Flex>
  )
}
