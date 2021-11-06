import React, { useState, useCallback, useEffect } from 'react'
import {
  useBreakpointValue,
  Avatar,
  Link,
  Icon,
  IconButton,
  extendTheme
} from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { Flex, Text, Box } from '@chakra-ui/react'
import { withSSRAuth } from '../../utils/withSSRAuth'

import { Sidebar } from '../../components/Sidebar'
import { ImMenu } from 'react-icons/im'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { CardPageInfo } from '../../components/PageInfoComponents/CardPageInfo'
import { ChartPageInfo } from '../../components/PageInfoComponents/ChartPageInfo'
import { ChartPieInfo } from '../../components/PageInfoComponents/ChartPie'
import { CardInfoEditabled } from '../../components/PageInfoComponents/CardInfoEditabled'
import { CardDiet } from '../../components/PageInfoComponents/CardDiet'
import { useRouter } from 'next/router'
import styles from '../../styles/infos.module.scss'
import { GetClientsService } from '../../services/getClientsService/getClientsService'
import { IClientDataComplete } from '../../services/getClientsService/getClientsService.interface'

function Infos({ id }: any) {
  const { query } = useRouter()
  console.log('id', query.id)

  const [editField, setEditField] = useState(false)
  const [clientData, setClientData] = useState<IClientDataComplete | null>(null)
  console.log('clientData', clientData)
  const fetchData = useCallback(async () => {
    try {
      const response = await new GetClientsService().getClient(
        query.id as string
      )
      console.log(response)

      setClientData(response)
    } catch (err) {
      console.log('ERRO no carregamento dos dados do cliente')
    }
  }, [query.id])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  function handleClick() {
    setEditField(true)
  }

  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: true,
    xl: false
  })

  const breakpoints = createBreakpoints({
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    xl2: '1279px',
    g: '1600px'
  })

  const theme = extendTheme({ breakpoints })

  const avatarSize = useBreakpointValue({ base: 'md', sm: 'md' })

  return (
    <>
      {isWideVersion && (
        <Flex p="4">
          <IconButton
            _focus={{ outlineOffset: 'none', boxShadow: 'none' }}
            aria-label="Abrir navigation"
            icon={<Icon as={ImMenu} color="blue.300" />}
            fontSize="26"
            variant="unstyled"
            onClick={onOpen}
            pr="2"
          />

          <Flex width="100%" justifyContent="flex-end">
            <Flex
              flex="1"
              w="100%"
              direction="column"
              alignItems="flex-end"
              pl="10%"
              justifyContent="center"
              pr="4"
            >
              <Text fontWeight="semibold" color="blue.300" fontSize="18px">
                Joaozinho Pereira
              </Text>

              <Link href="/login">
                <Text fontWeight="semibold" fontSize="14px" color="blue.10">
                  SAIR
                </Text>
              </Link>
            </Flex>

            <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              size={avatarSize}
              border="3px solid white"
            />
          </Flex>
        </Flex>
      )}
      <Flex direction="row" h={{ base: '89vh', xl: '98vh' }} w="100%" pb="1%">
        <Sidebar />
        {clientData && (
          <div className={styles.mygrid}>
            <Box className={styles.Info}>
              <CardPageInfo
                image={clientData.patient?.profileIcon}
                name={clientData.patient.name}
                age={clientData.patient.age}
                situation={clientData.patient.status}
              />
            </Box>
            {/* </Flex> */}
            <Box className={styles.ChartInfo}>
              <ChartPageInfo
                seriesName={clientData.weightHistoryChart.chartData.label}
                categories={clientData.weightHistoryChart.dates}
                data={clientData.weightHistoryChart.chartData.data}
              />
            </Box>
            <Box className={styles.ChartPie}>
              <ChartPieInfo
                series={clientData.mealChartDataDTO.count}
                labels={clientData.mealChartDataDTO.category}
              />
            </Box>
            <Box className={styles.InfoEditabled}>
              <CardInfoEditabled
                patientID={query.id as string}
                height={clientData.measure.height}
                weigth={clientData.measure.weight}
                IMC={clientData.measure.bmi}
              />
            </Box>
            <Box bg="green.300" className={styles.Diet}>
              <CardDiet
                dataDiet={clientData.diet}
                patientID={query.id as string}
              />
            </Box>
          </div>
        )}
      </Flex>
    </>
  )
}

export default Infos

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})
