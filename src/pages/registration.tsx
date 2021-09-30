import { Flex, Text, Input, Button, Image, Checkbox } from '@chakra-ui/react'
import { useState } from 'react'

import Link from 'next/link'
import DefaultStep from '../components/RegistrationSteps/DefaultStep/DefaultStep'
import DetailStep from '../components/RegistrationSteps/DetailStep/DetailStep'

export default function Registration() {
  const [show, setShow] = useState(false)
  const [checkedItems, setCheckedItems] = useState(false)
  const handleClick = (e) => {
    setCheckedItems(e.target.checked)
    setShow(e.target.checked)
  }
  return (
    <Flex justifyContent="flex-end">
      <Flex
        w={['100%', '100%', '34%']}
        minW="300px"
        bgColor="blue.200"
        h="100vh"
        justifyContent="center"
        alignItems="start"
      >
        <Flex
          alignItems="center"
          flexDir="column"
          width="100%"
          height="100%"
          paddingX={['30px', '60px']}
          marginTop={['30px', '60px']}
        >
          <Flex justifyContent="center">
            <Image
              src="/icons/logo.png"
              width={[120, 140, 140]}
              height={[120, 140, 140]}
              maxW="140px"
              maxH="140px"
              bg="blue.300"
              color="white"
              border="2px solid white"
              borderRadius="50%"
            />
          </Flex>
          <DetailStep handleClick={handleClick} />
        </Flex>
      </Flex>

      <Flex w={['0%', '0%', '66%']}>
        <Image src="/icons/nutricionista.png" />
      </Flex>
    </Flex>
  )
}
