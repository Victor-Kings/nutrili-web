import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Text,
  Textarea,
  Input,
  Checkbox,
  Button,
  Grid
} from '@chakra-ui/react'
import styles from './Schedule.module.scss'
import { Icon, InlineIcon } from '@iconify/react'
import Trash from '@iconify/icons-bx/bxs-trash-alt'
import X from '@iconify/icons-emojione-monotone/heavy-multiplication-x'
import DatePicker from '../DatePicker/DatePicker'

export default function ContentModal({ closeModal }) {
  const [startDate, setStartDate] = useState(new Date())
  const setDate = (date) => setStartDate(date)
  return (
    <div className={styles.containerContentModal}>
      <div className={styles.headerContentModal}>
        <div>
          <button className={styles.closeButton} onClick={closeModal}>
            <InlineIcon icon={X} />
          </button>
        </div>
        <div>
          <button
            className={styles.buttonStyle}
            style={{
              borderRight: '4px',
              borderRightColor: '#656565',
              paddingRight: '2px'
            }}
            onClick={closeModal}
          >
            <Icon
              style={{
                color: '#656565',
                marginRight: '30px'
              }}
              width="30px"
              icon={Trash}
            />
          </button>
          <div className={styles.saveButton}>
            <Button
              backgroundColor="blue.110"
              colorScheme="blue"
              variant="solid"
              onClick={closeModal}
            >
              Salvar
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.bodyContentModal}>
        <Text
          fontWeight="semibold"
          color="gray.200"
          textAlign="initial"
          fontSize={[14, 16, 18]}
          fontFamily="heading"
          paddingTop="4%"
        >
          Título
        </Text>
        <Input
          className={styles.tamInputs}
          placeholder="reunião com o cliente"
          _placeholder={{ color: 'blue.105' }}
          name="titulo"
          type="titulo"
          focusBorderColor="blue.110"
          bgColor="blue.2"
          variant="filled"
          _hover={{ color: 'blue.10', textColor: 'blue.110' }}
          color="blue.110"
          borderColor="blue.110"
          size="md"
          marginBottom="4%"
        />
        <Text
          fontWeight="semibold"
          color="gray.200"
          textAlign="initial"
          fontSize={[14, 16, 18]}
          fontFamily="heading"
        >
          Resumo
        </Text>
        <Textarea
          className={styles.tamInputs}
          _placeholder={{ color: 'blue.105' }}
          name="resumo"
          type="resumo"
          focusBorderColor="blue.110"
          bgColor="blue.2"
          variant="filled"
          color="blue.110"
          _hover={{ color: 'blue.10', textColor: 'blue.110' }}
          borderColor="blue.110"
          placeholder="..."
          size="sm"
          maxH="40px"
          borderRadius="md"
        />
        <div>
          <div>
            <label htmlFor="startDate">Início</label>
            <div>
              <input id="startDate" type="date" />
              <input
                type="time"
                id="startHour"
                name="startHour"
                min="09:00"
                max="18:00"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="endDate">Fim</label>
            <div>
              <input id="endDate" type="date" />
              <input
                type="time"
                id="endHour"
                name="endHour"
                min="09:00"
                max="18:00"
                value="#fff"
                required
              />
            </div>
          </div>

          {/* <FormControl>
            <FormLabel htmlFor="Fim">Fim</FormLabel>
            <DatePicker
              id="Fim"
              selectedDate={startDate}
              onChange={setDate}
              showPopperArrow={true}
            />
          </FormControl> */}
        </div>
        <Checkbox color="blue.200" defaultIsChecked>
          Todos os dias
        </Checkbox>
      </div>
    </div>
  )
}
