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
    width: 380,
    type: 'pie'
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  ]
}

const series = [44, 55, 13, 43, 22]

export function ChartPieInfo(props: ICardPageProps) {
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
        Categoria de Alimento
      </Text>
      {isSmallThan600 ? (
        <Chart type="pie" width={335} options={options} series={series} />
      ) : (
        <Chart
          type="pie"
          width={530}
          height={220}
          options={options}
          series={series}
        />
      )}
    </Flex>
  )
}
