import { Flex, useMediaQuery, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
interface IChartPageInfo {
  categories?: string[]
  seriesName?: string
  data?: number[]
}

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export function ChartPageInfo(props: IChartPageInfo) {
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
      categories: props.categories,
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

  const series = [{ name: props.seriesName, data: props.data }]

  const [isSmallThan600] = useMediaQuery('(max-width: 600px)')

  return (
    <Flex
      backgroundColor="white"
      h="280px"
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
