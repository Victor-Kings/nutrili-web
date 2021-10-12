import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import styles from '../styles/NewClientsList.module.scss'
import {
  Avatar,
  SimpleGrid,
  Grid,
  GridItem,
  Button,
  Text,
  Flex,
  useBreakpointValue
} from '@chakra-ui/react'
import moment from 'moment'

const breakpoints = createBreakpoints({
  tiny: '20em',
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  xl2: '90em'
})

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    },
    iconArrow: {
      color: '#ADADAD'
    }
  })
)

import { IClientsData } from '../interfaces/clientes.interface'

interface IProps {
  clients: IClientsData
  handleClick: (requestID: string, value: boolean) => void
}

function diffTimeTeste(tempo: string): string {
  tempo = tempo.replace(' ', 'T')
  const date = new Date(tempo)
  const diff = moment(date, 'YYYYMMDD').fromNow()
  return diff
}

export default function SimpleAccordion(props: IProps) {
  const avatarSize = useBreakpointValue({ base: 'md', sm: 'md' })

  moment.locale('pt-br')
  const classes = useStyles()

  return (
    <div className={styles.scrollFlex}>
      {props.clients.nutritionistList.map((values) => (
        <Accordion key={values.requestId}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.iconArrow} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Flex flex="1" width="100%" flexDirection="row" alignItems="center">
              <Avatar
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                border="3px solid#EBF5FF"
                size={avatarSize}
              />
              <Flex width="55%">
                <Text color="gray.200" pl="5%" fontSize={{ base: '14px' }}>
                  {values.name} - {values.age} anos
                </Text>
              </Flex>
              <Flex flex="1" justifyContent="center" alignItems="flex-end">
                <Text
                  color="gray.50"
                  flex="1"
                  textAlign="end"
                  pr="2%"
                  fontSize={{ base: '12px' }}
                >
                  {diffTimeTeste(values.date)}
                </Text>
              </Flex>
            </Flex>
          </AccordionSummary>
          <AccordionDetails style={{ display: 'block' }}>
            <SimpleGrid color="gray.200">
              <Flex flexDirection="column">
                <Text>Informações: </Text>
                <Text>CPF: {values.cpf} </Text>
                <Text>Endereço: {values.address} </Text>
              </Flex>

              <Flex pt="4%">
                <Flex flex="1" flexDirection="column">
                  <Text>Altura: {values.measure.height} cm</Text>
                  <Text>Peso: {values.measure.weight} </Text>
                  <Text>IMC: {values.measure.bmi} </Text>

                  {/* 
                  TODO: Não sei como era pra ser 
                  {values.}
                  */}
                  {values.answerList.map((value, index) => (
                    <>
                      <Text key={`${value.idQuestion}${index}`}>
                        Pergunta: {value.question}
                      </Text>
                      <Text key={`${value.idQuestion}${value.question}`}>
                        Resposta: {value.answer}
                      </Text>
                    </>
                  ))}
                  {/* 
                  TODO: Não sei como era pra ser 
                  */}
                </Flex>
                {/* <Flex flex="1" flexDirection="column">
                  <Text>Peso: {values.medicao.peso} Kg </Text>
                  <Text>Medida C: {values.medicao.medida_c}</Text>
                  <Text>Medida D: {values.medicao.medida_d}x</Text>
                </Flex> */}
              </Flex>

              <Grid
                pt="4%"
                templateColumns="repeat(6,1fr)"
                gap="5px"
                color="white"
              >
                <GridItem colStart={3} colEnd={3} h="10">
                  <Flex Flex="1" justifyContent="flex-end">
                    <Button
                      backgroundColor="blue.200"
                      onClick={() => props.handleClick(values.requestId, true)}
                    >
                      ACEITAR
                    </Button>
                  </Flex>
                </GridItem>
                <GridItem colStart={4} colEnd={4} h="10">
                  <Flex Flex="1" justifyContent="flex-start">
                    <Button
                      backgroundColor="#D93F3F"
                      onClick={() => props.handleClick(values.requestId, false)}
                    >
                      NEGAR
                    </Button>
                  </Flex>
                </GridItem>
              </Grid>
            </SimpleGrid>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
