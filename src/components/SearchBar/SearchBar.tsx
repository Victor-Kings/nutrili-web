import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { Flex, Text } from '@chakra-ui/react'
import { ISearchBar } from './SearchBar.interface'
import { useEffect, useState } from 'react'
import { Icon } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import { GetClientsService } from '../../services/getClientsService/getClientsService'
export function SearchBar({clients, numberOfPage, onHandleSearch }: ISearchBar) {

  const [busca, setBusca] = useState('')

  const handle = (event: any) => {
    if (!event.target.value) {
      onHandleSearch(clients, numberOfPage)
      setBusca('')
      return
    }
    setBusca(event.target.value.toLowerCase())
  }

  useEffect(()=>{
    if(busca!=''){
        new GetClientsService().getClientsPagination(1, false, busca)
        .then((data)=>{
          onHandleSearch(data.patient, data.numberOfPages)
        })
        .catch((err)=>{
          console.error('Fetch Clients data', err)
        })
    }
  },[busca])
  
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
