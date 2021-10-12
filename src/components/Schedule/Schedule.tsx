import { FiClock } from 'react-icons/fi'
import { BsPlusCircle } from 'react-icons/bs'
import styles from './Schedule.module.scss'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import ContentModal from './ContentModal'
import { IRegisterSchedulerProps } from '../../interfaces/registerScheduler.interface'
import { InsertNewSchedulingService } from '../../services/InsertNewSchedulingService/InsertNewSchedulingService'

export default function Schedule() {
  const [showModal, SetShowModal] = useState(false)

  const closeModal = () => {
    SetShowModal(false)
  }

  const SaveNewScheduling = async (value: IRegisterSchedulerProps) => {
    try {
      await new InsertNewSchedulingService().insertScheduling(value)
    } catch (err) {
      console.error('Schedule', err)
    }
  }
  return (
    <div className={styles.content}>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        content={
          <ContentModal
            closeModal={closeModal}
            saveScheduling={SaveNewScheduling}
          />
        }
      />
      <div className={styles.schedule}>
        <div className={styles.header}>
          <div>
            <h1>Agenda Diária</h1>
            <p>
              <span>Hoje | </span>
              <span>Dia 06 |</span>
              <span>Segunda-feira</span>
            </p>
          </div>
          <button
            className={styles.addButton}
            onClick={() => {
              SetShowModal(true)
            }}
          >
            <BsPlusCircle />
          </button>
        </div>

        <div className={styles.nextAppointment}>
          <strong>Próximo item da agenda</strong>
          <div>
            <strong>Reunião 2</strong>
            <span>
              <FiClock />
              08:00
            </span>
          </div>
        </div>
        <div className={styles.scrollFlex}>
          <section className={styles.section}>
            <strong>Manhã</strong>
            <div className={styles.appointment}>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <strong>Primeira Reunião</strong>
              </div>
            </div>

            <div className={styles.appointment}>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <strong>Segunda Reunião</strong>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <strong>Tarde</strong>
            <div className={styles.appointment}>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <strong>Terceira Reunião</strong>
              </div>
            </div>
            <div className={styles.appointment}>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <strong>Quarta Reunião</strong>
              </div>
            </div>
            <div className={styles.appointment}>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <strong>Quinta Reunião</strong>
              </div>
            </div>
            <div className={styles.appointment}>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <strong>Sexta Reunião</strong>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
