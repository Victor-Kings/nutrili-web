import { Flex, useMediaQuery, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
interface ICardPageProps {
  image?: string
  name?: string
  age?: string
  situation?: string
}

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: '#717171'
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: '#428245'
    },
    axisTicks: {
      color: '#FA333F'
    },
    categories: [
      '2018-09-18T00:00:00.000Z',
      '2018-09-19T01:30:00.000Z',
      '2018-09-20T02:30:00.000Z',
      '2018-09-21T03:30:00.000Z',
      '2018-09-22T04:30:00.000Z'
    ],
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.8,
        opacityTo: 0.2
      }
    }
  }
}

const series = [{ name: 'serie1', data: [31, 120, 10, 51, 29] }]

export function ChartPageInfo(props: ICardPageProps) {
  const [isSmallThan600] = useMediaQuery('(max-width: 600px)')

  return (
    <Flex
      backgroundColor="white"
      h="280px"
      // mt={isSmallThan600 ? '20px' : '25px'}
      // mr="10px"
      // ml="10px"
      // pt={{ base: '', lg: '' }}
      borderRadius="5px"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      maxW={isSmallThan600 ? '340px' : '540px'}
      flexDir="column"
    >
      <Text fontSize="24px" color=" #717171" fontWeight="600" pt="10px">
        IMC
      </Text>
      {isSmallThan600 ? (
        <Chart
          type="area"
          width={335}
          height={220}
          options={options}
          series={series}
        />
      ) : (
        <Chart
          type="area"
          width={530}
          height={220}
          options={options}
          series={series}
        />
      )}
    </Flex>
  )
}
