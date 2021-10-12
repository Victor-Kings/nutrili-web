import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import styles from '../styles/NewClientsList.module.scss'
import {
  Avatar,
  SimpleGrid,
  Text,
  Flex,
  useBreakpointValue
} from '@chakra-ui/react'
import moment from 'moment'

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
  tempo = tempo.replace(' ', 'T')
  const date = new Date(tempo)
  const diff = moment(date, 'YYYYMMDD').fromNow()
  return diff
}

import { INotifications } from '../interfaces/notifications.interface'
import { forEach } from 'lodash'

interface IProps {
  notifications: INotifications[]
  handlerViewNotification: (id: string) => void
  setNotifications: (params: any) => void
}

export default function SimpleAccordion(props: IProps) {
  const avatarSize = useBreakpointValue({ base: 'md', sm: 'md' })
  console.log(props.notifications)

  const hadlerClick = (id: string, status: boolean) => {
    console.log('status', status)
    if (!status) {
      props.handlerViewNotification(id)
      const elementChange = props.notifications.find((value) => value.id == id)
      elementChange.status = true
      const otherElements = props.notifications.filter(
        (value) => value.id != id
      )
      const newNotifications = [elementChange, ...otherElements].sort(
        (valueA, valueB) => {
          return valueA.index - valueB.index
        }
      )
      props.setNotifications(newNotifications)
    }
  }
  moment.locale('pt-br')
  const classes = useStyles()
  return (
    <div className={styles.scrollFlex}>
      {props.notifications.map((values) => (
        <Accordion
          key={values.id}
          onClick={() => hadlerClick(values.id, values.status)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.iconArrow} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Flex flexDir={{ base: 'column', lg: 'row' }}>
              <Flex
                width={{ base: '200px', xl: '400px' }}
                ml={{ base: '0px', lg: '20px' }}
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
                  {values.senderName}
                </Text>
              </Flex>
              <Flex alignItems="center" justifyContent="space-between">
                {!values.status ? (
                  <Text
                    color="blue.500"
                    fontWeight="bold"
                    fontSize={{
                      base: '14px',
                      lg: '18px'
                    }}
                  >
                    Nova
                  </Text>
                ) : (
                  <Text
                    color="green.500"
                    fontWeight="bold"
                    fontSize={{
                      base: '14px',
                      lg: '18px'
                    }}
                  >
                    Visualizada
                  </Text>
                )}
                <Flex
                  marginLeft={{ base: '0px', lg: '1vw' }}
                  alignItems="center"
                >
                  <Text
                    color="gray.200"
                    fontSize={{
                      base: '14px',
                      lg: '18px'
                    }}
                  >
                    {diffTimeTeste(values.dateOfNotification)}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </AccordionSummary>
          <AccordionDetails style={{ display: 'block' }}>
            <SimpleGrid color="gray.200">
              <Flex pt="2%">
                <Flex flex="1" flexDirection="column">
                  <Text ml="8%">{values.message}</Text>
                </Flex>
              </Flex>
            </SimpleGrid>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
