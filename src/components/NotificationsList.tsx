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

function diffTimeTeste(tempo: string): string {
  const date = new Date(tempo)

  const dateFormated =
    date.toISOString().slice(0, 4) +
    date.toISOString().slice(5, 7) +
    date.toISOString().slice(8, 10)
  const diff = moment(dateFormated, 'YYYYMMDD').fromNow()

  return diff
}

import { INotifications } from '../interfaces/notifications.interface'

interface IProps {
  notifications: INotifications[]
}

export default function SimpleAccordion(props: IProps) {
  const avatarSize = useBreakpointValue({ base: 'md', sm: 'md' })

  moment.locale('pt-br')
  const classes = useStyles()
  return (
    <div className={styles.scrollFlex}>
      {props.notifications.map((values) => (
        <Accordion key={values._id}>
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
              <Flex width="20%">
                <Text color="gray.400" pl="5%" fontSize={{ base: '14px' }}>
                  {values.from}
                </Text>
                </Flex>
                <Flex width="50%" overflowWrap="initial" textOverflow="ellipsis" overflow="hidden" white-space="nowrap">
                <Text color="gray.200" pl="5%" fontSize={{ base: '14px' }} >
                  {values.msg}
                </Text>
              </Flex>
              <Flex width="20%">
                <Text color="gray.200" pl="5%" fontSize={{ base: '14px' }}>
                  {values.status}
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
                <Text>Nome: {values.from} </Text>
                <Text>CPF: {values.cpf} </Text>
              </Flex>

              <Flex pt="2%">
                <Flex flex="1" flexDirection="column">
                  <Text>Mensagem: {values.msg}</Text>
                </Flex>
              </Flex>
            </SimpleGrid>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
