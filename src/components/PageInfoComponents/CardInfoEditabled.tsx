import { useState, useEffect } from 'react'
import {
  Text,
  Flex,
  Avatar,
  Editable,
  EditableInput,
  EditablePreview,
  ButtonGroup,
  useEditableControls,
  IconButton,
  Input,
  Grid,
  Box
} from '@chakra-ui/react'
import styles from '../../styles/profile.module.scss'
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons'
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
        <IconButton
          aria-label="Search database"
          icon={<CloseIcon />}
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
      background="blackAlpha.200"
    >
      <Flex
        justifyContent="space-between"
        width="100%"
        backgroundColor="bisque"
        paddingX="5%"
      >
        <Text color="#494949" fontWeight="bold" fontSize="24px">
          Informações:
        </Text>
        <EditableControls />
      </Flex>
      <Flex
        justifyContent="space-between"
        width="100%"
        backgroundColor="green.300"
        paddingX="5%"
        mt="5%"
      >
        {!isEditing ? (
          <Grid
            width="100%"
            templateColumns="repeat(2, 1fr)"
            templateRows="repeat(2, 1fr)"
            gap={1}
          >
            <Box w="100%" h="10" bg="blue.500" alignContent="center">
              <Flex height="100%" alignItems="center">
                Altura: {dataInfos?.height}
              </Flex>
            </Box>
            <Box w="100%" h="10" bg="blue.500" alignContent="center">
              <Flex height="100%" alignItems="center">
                Peso: {dataInfos?.weigth}
              </Flex>
            </Box>
            <Box w="100%" h="10" bg="blue.500" alignContent="center">
              <Flex height="100%" alignItems="center">
                IMC: {dataInfos?.IMC}
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
            <Box w="100%" h="10" bg="blue.500">
              <Flex alignItems="center">
                <Text>Altura:</Text>
                <Input pl="2%" value={dataInfos?.height} />
              </Flex>
            </Box>
            <Box w="100%" h="10" bg="blue.500">
              <Flex alignItems="center">
                <Text>Peso:</Text>
                <Input pl="2%" value={dataInfos?.weigth} />
              </Flex>
            </Box>
            <Box w="100%" h="10" bg="blue.500">
              <Flex alignItems="center">
                <Text>IMC:</Text>
                <Input pl="2%" value={dataInfos?.IMC} />
              </Flex>
            </Box>
          </Grid>
        )}
      </Flex>
    </Flex>
  )
}
