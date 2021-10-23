import { Link, Flex, Avatar, Text, Icon } from '@chakra-ui/react'

import { MdCheckCircle } from 'react-icons/md'
import { TiWarning } from 'react-icons/ti'
import { IListClientsProps } from './ListClients.interface'
import styles from './listClients.module.scss'

export default function ListClients({ clients }: IListClientsProps) {
  return (
    <div className={styles.divMain}>
      {clients.map((values) => (
        <Link
          key={values.patientID}
          bgColor="white"
          mt="15px"
          display="flex"
          w="100%"
          _hover={{ textDecoration: 'none' }}
          className={styles.link}
        >
          <Flex alignItems="center" pl={{ base: '20px', lg: '50px' }}>
            <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              border="3px solid#EBF5FF"
              size={values.profileIcon}
            />
          </Flex>
          <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            ml={{ base: '30px', lg: 'unset' }}
          >
            <Flex
              width="200px"
              ml={{ base: '0px', lg: '55px' }}
              alignItems="center"
            >
              <Text
                color="gray.400"
                fontWeight="bold"
                fontSize={{
                  base: '14px',
                  lg: '18px'
                }}
              >
                {values.name}
              </Text>
            </Flex>
            {/* </Flex> */}
            <Flex minWidth="120px" alignItems="center" display="flex" flex="1">
              <Text
                color="gray.200"
                fontSize={{
                  base: '14px',
                  lg: '18px'
                }}
              >
                Idade - {values.age}
              </Text>
            </Flex>
            <Flex
              minWidth={{ base: 'unset', lg: '250px' }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                color="gray.200"
                fontSize={{
                  base: '14px',
                  lg: '18px'
                }}
              >
                Situação: <br />
                Dieta {values.status || 'Desatualizada'}
              </Text>
              {values.status ? (
                <Icon
                  as={MdCheckCircle}
                  fontSize={{ base: 20, lg: 28 }}
                  justifyContent="flex-start"
                  bgColor="white"
                  color="green"
                  mr={{ base: '5px', lg: 'unset' }}
                />
              ) : (
                <Icon
                  as={TiWarning}
                  fontSize={{ base: 20, lg: 28 }}
                  justifyContent="flex-start"
                  bgColor="white"
                  color="#FA931A"
                  mr={{ base: '5px', lg: 'unset' }}
                />
              )}
            </Flex>
            <Flex
              width={{ base: '100%', lg: '350px' }}
              marginLeft={{ base: '0px', lg: '4vw' }}
              alignItems="center"
            >
              <Text
                color="gray.200"
                fontSize={{
                  base: '14px',
                  lg: '18px'
                }}
              >
                {values.dateOfLastMeeting
                  ? `Tempo desde a última consulta presencial:${values.dateOfLastMeeting} dias`
                  : 'Ainda não foi a um nutricionista'}
              </Text>
            </Flex>
          </Flex>
        </Link>
      ))}
    </div>
  )
}
