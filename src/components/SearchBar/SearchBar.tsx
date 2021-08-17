import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { Flex, Text } from '@chakra-ui/react'
import { ISearchBar } from './SearchBar.interface'
import { useState } from 'react'
import { Icon } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

export function SearchBar({ clients, onHandleSearch }: ISearchBar) {
  const [busca, setBusca] = useState('')

  const handle = (event: any) => {
    if (!event.target.value) {
      onHandleSearch(clients)
      setBusca('')
      return
    }
    setBusca(event.target.value)
    const clientsFiltered = clients.filter((clientes) =>
      clientes.name.toLowerCase().includes(busca.toLowerCase())
    )
    onHandleSearch(clientsFiltered)
  }

  return (
    <>
      <Flex
        margin="0 2% 0 auto"
        width={{base:"80%", lg:"50%"}}
        bgColor="white"
        h="40px"
        borderRadius="50px"
        boxShadow="2px 2px 4px rgba(0, 0, 0, 0.25)"
      >
        <InputGroup textColor="black">
          <InputRightElement
            pointerEvents="none"
            borderRadius="50px"
            pr="20px"
            children={<Icon as={BsSearch} fontSize={22} color="blue.300" />}
          />
          <Input
            borderRadius="50px"
            type="text"
            value={busca}
            onChange={handle}
          />
        </InputGroup>
      </Flex>
    </>
  )
}
