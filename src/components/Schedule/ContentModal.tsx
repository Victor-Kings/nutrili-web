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
          <div
            style={{
              borderRight: '4px',
              borderRightColor: 'black',
              paddingRight: '2px'
            }}
          >
            <Icon
              style={{
                color: 'red'
              }}
              icon={Trash}
            />
          </div>
          <Button className={styles.saveButton} onClick={closeModal}>
            Salvar
          </Button>
        </div>
      </div>
      <div className={styles.bodyContentModal}>
        <Text
          fontWeight="semibold"
          color="blue.200"
          textAlign="initial"
          fontSize={[14, 16, 18]}
          fontFamily="heading"
          paddingTop="4%"
        >
          Titulo
        </Text>
        <Input
          placeholder="reunião com o cliente"
          _placeholder={{ color: 'blue.10' }}
          name="titulo"
          type="titulo"
          focusBorderColor="blue.110"
          bgColor="blue.110"
          variant="filled"
          _hover={{ color: 'blue.110' }}
          size="md"
          width="60%"
          marginBottom="4%"
        />
        <Text
          fontWeight="semibold"
          color="blue.200"
          textAlign="initial"
          fontSize={[14, 16, 18]}
          fontFamily="heading"
        >
          Resumo
        </Text>
        <Textarea
          _placeholder={{ color: 'blue.10' }}
          name="resumo"
          type="resumo"
          focusBorderColor="blue.110"
          bgColor="blue.110"
          variant="filled"
          _hover={{ color: 'blue.110' }}
          placeholder="..."
          size="sm"
          width="60%"
          maxH="40px"
        />
        <div>
          <div>
            <label htmlFor="startDate">Inicio</label>
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
