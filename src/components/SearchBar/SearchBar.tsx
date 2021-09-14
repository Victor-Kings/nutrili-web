import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { Flex, Text } from '@chakra-ui/react'
import {ISearchBar} from './SearchBar.interface'
import { useState } from 'react'
import {
  Icon,
} from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

export function SearchBar({clients, onHandleSearch}:ISearchBar) {
  
  const [busca, setBusca] = useState('')

  const handle = (event: any)=>{
    if(!event.target.value){
      onHandleSearch(clients);
      setBusca('');
      return
    }
    setBusca(event.target.value);
    const clientsFiltered = clients.filter((clientes) =>
    clientes.name.toLowerCase().includes(busca.toLowerCase())
    )
    onHandleSearch(clientsFiltered)
  }

  return (
    <>
      <Flex margin="0 2% 0 auto" width="40%">
        <InputGroup textColor="black">
          <InputRightElement pointerEvents="none" children={<Icon
          as={BsSearch}
          fontSize={22}
          color="white"
          />} />
          <Input type="text" value={busca} onChange={handle} />
        </InputGroup>
      </Flex>
    </>
  )
}
