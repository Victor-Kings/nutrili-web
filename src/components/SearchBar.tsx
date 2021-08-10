import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { Flex, Text } from '@chakra-ui/react'
import {
    SearchOutlined,
  } from '@ant-design/icons';
  export function SearchBar() {
    return (
      <>
      <Flex
      margin="0 2% 0 auto"
      width="40%">
    <InputGroup
    textColor="black">
    <InputLeftElement
      pointerEvents="none"
      children={<SearchOutlined style={{ fontSize: '16px', color: '#08c' }}/>}
    />
    <Input type="text"/>
  </InputGroup>
    </Flex>
      </>
    )
  }
  