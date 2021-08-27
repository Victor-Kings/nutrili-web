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
  useBreakpointValue,
  Link,
  Icon
} from '@chakra-ui/react'
import moment from 'moment'
import { MdCheckCircle } from 'react-icons/md'
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
        <Flex alignItems="center" pl={{base:"20px",lg:"20px"}}>
          
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            border="3px solid#EBF5FF"
            size={avatarSize}
          />
        </Flex>
        <Flex flexDir={{base: 'column', lg: 'row'}} ml={{base: "30px", lg:"unset"}}>
          
          <Flex width={{base: "200px", xl:"260px"}} ml={{base: '0px', lg: "20px"}} alignItems="center">
            <Text
              color="gray.400"
              fontWeight="bold"
              fontSize={{
                base: '14px',
                lg: '18px'
              }}
            >
              {values.from}
            </Text>
          </Flex>
          {/* </Flex> */}
          <Flex minWidth="230px" alignItems="center" display="flex" flex="1">
            <Text
              color="gray.200"
              fontSize={{
                base: '14px',
                lg: '18px'
              }}
            >
              {values.title}
            </Text>
          </Flex>
          <Flex
            minWidth={{base: "unset",lg:"160px"}}
            alignItems="center"
            justifyContent="space-between"
            ml={{base: "0px", lg:"40px"}}
          >
            {values.status == 'Nova' ?
              <Text
              color="blue.500"
              fontWeight="bold"
              fontSize={{
                base: '14px',
                lg: '18px'
              }}
            >{values.status}</Text>
            :
              <Text
              color="green.500"
              fontWeight="bold"
              fontSize={{
                base: '14px',
                lg: '18px'
              }}
            >{values.status}</Text>
          }
          </Flex>
          <Flex width="16%" marginLeft={{base: '0px', lg: "1vw"}} alignItems="center">
            <Text
              color="gray.200"
              fontSize={{
                base: '14px',
                lg: '18px'
              }}
            >
              {diffTimeTeste(values.date)}
            </Text>
          </Flex>
          
        </Flex>
        </AccordionSummary>
          <AccordionDetails style={{ display: 'block' }}>
            <SimpleGrid color="gray.200">
              <Flex flexDirection="column">
                <Text ml="5%" color="gray.400" fontWeight="bold"> {values.title} </Text>
              </Flex>
              <Flex pt="2%">
                <Flex flex="1" flexDirection="column">
                  <Text ml="8%">{values.msg}</Text>
                </Flex>
              </Flex>
            </SimpleGrid>
          </AccordionDetails>
        </Accordion>
        
        
      ))}
    </div>
  )
}
