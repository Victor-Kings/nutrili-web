import { Flex, Text, Input, Button, Image, Checkbox } from '@chakra-ui/react'
import { useState } from 'react'

import Link from 'next/link'
import DefaultStep from '../components/RegistrationSteps/DefaultStep/DefaultStep'
import DetailStep from '../components/RegistrationSteps/DetailStep/DetailStep'

export default function Registration() {
  const [show, setShow] = useState(false)
  const [checkedItems, setCheckedItems] = useState(false)
  const showDetailStep = true
  const handleClick = (e) => {
    setCheckedItems(e.target.checked)
    setShow(e.target.checked)
  }
  return (
    <Flex justifyContent="flex-end" h="100vh">
      <Flex
        w={['100%', '100%', '34%']}
        minW="300px"
        bgColor="blue.200"
        justifyContent="center"
        alignItems="center"
        alignSelf="center"
        h="100%"
      >
        <Flex
          alignItems="center"
          flexDir="column"
          width="100%"
          paddingX={['30px', '60px']}
          h="100%"
          mt="5%"
          overflow="auto"
          css={{
            '&::-webkit-scrollbar': {
              width: '5px'
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
              height: '10px'
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'white',
              borderRadius: '24px'
            }
          }}
        >
          <Flex justifyContent="center" pb="10%">
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
          {showDetailStep ? (
            <DetailStep handleClick={handleClick} />
          ) : (
            <DefaultStep
              handleClick={handleClick}
              show={show}
              checkedItems={checkedItems}
            />
          )}
        </Flex>
      </Flex>

      <Flex w={['0%', '0%', '66%']} maxH="1080px">
        <Image src="/icons/nutricionista.png" />
      </Flex>
    </Flex>
  )
}
