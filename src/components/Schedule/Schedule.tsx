import { FiClock } from 'react-icons/fi'
import { BsPlusCircle } from 'react-icons/bs'
import styles from './Schedule.module.scss'
import { useEffect, useState, useCallback } from 'react'
import Modal from '../Modal/Modal'
import ContentModal from './ContentModal'
import { IRegisterSchedulerProps } from '../../interfaces/registerScheduler.interface'
import { InsertNewSchedulingService } from '../../services/InsertNewSchedulingService/InsertNewSchedulingService'
import { IGetSchedulers } from '../../interfaces/registerScheduler.interface'
import { GetDataSchedulingService } from '../../services/GetDataSchedulingService/GetDataSchedulingService'

export default function Schedule() {
  interface IDataToRemove {
    indexMeeting: number
    dayPeriod: number
    appointmentId: string
  }

  const [schedule, setSchedule] = useState<IGetSchedulers>(null)
  const [meetingDetails, setMeetingDetails] =
    useState<IRegisterSchedulerProps>(null)
  const [dataToRemove, setDataToRemove] = useState<IDataToRemove>(null)
  const [updateSchedule, setUpdateSchedule] = useState<boolean>(false)

  const getSchedule = useCallback(async () => {
    try {
      const response = await new GetDataSchedulingService().getSchedule()
      setSchedule(response)
      verifyPastMeetings(response)
    } catch (err) {
      console.log('ERROR to load the schedule: ', err)
    }
  }, [])

  const handlerSendIndex = async (appointmentId: string) => {
    try {
      await new GetDataSchedulingService().sendIndexToRemove(appointmentId)
    } catch (err) {
      console.error('ERROR to send the index to remove: ', err)
    }
  }

  const verifyPastMeetings = async (schedule: IGetSchedulers) => {
    let minuteOfNextMeeting: number
    let i = 0
    let id: string

    if (
      schedule != null &&
      schedule.morningAppointments != null &&
      schedule.morningAppointments.length > 0
    ) {
      // Morning
      for (i = 0; i < schedule.morningAppointments.length; i++) {
        if (
          schedule.morningAppointments[i] != null &&
          schedule.morningAppointments[i].startingTime != null
        ) {
          minuteOfNextMeeting = minutesOfNextMeeting(
            schedule.morningAppointments[i].startingTime
          )
          if (currentMinutes() >= minuteOfNextMeeting) {
            id = schedule.morningAppointments[i].id
            delete schedule.morningAppointments[i]
            setSchedule(schedule)
            handlerSendIndex(id)
          }
        }
      }
    } else {
      // Afternoon
      if (
        schedule != null &&
        schedule.afternoonAppointments != null &&
        schedule.afternoonAppointments.length > 0
      ) {
        for (i = 0; i < schedule.afternoonAppointments.length; i++) {
          if (
            schedule.afternoonAppointments[i] != null &&
            schedule.afternoonAppointments[i].startingTime != null
          ) {
            minuteOfNextMeeting = minutesOfNextMeeting(
              schedule.afternoonAppointments[i].startingTime
            )
            if (currentMinutes() >= minuteOfNextMeeting) {
              id = schedule.afternoonAppointments[i].id
              delete schedule.afternoonAppointments[i]
              setSchedule(schedule)
              handlerSendIndex(id)
            }
          }
        }
      }
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      getSchedule()
    }, 300000)
    return () => clearInterval(intervalId)
  }, [getSchedule, schedule])
  
  useEffect(() => {
    getSchedule()
  },[])
  const [showModal, SetShowModal] = useState(false)
  const closeModal = () => {
    SetShowModal(false)
  }

  const SaveNewScheduling = async (value: IRegisterSchedulerProps) => {
    value.startingDate = value.startingDate.split('-').reverse().join('/')
    value.endingDate = value.endingDate.split('-').reverse().join('/')

    if (!updateSchedule) {
      try {
        await new InsertNewSchedulingService().insertScheduling(value)
        getSchedule()
      } catch (err) {
        console.error('ERROR to insert the dates in schedule: ', err)
      }
    } else {
      try {
        await new InsertNewSchedulingService().updateScheduling(value)
        getSchedule()
      } catch (err) {
        console.error('ERROR to send the dates to update schedule: ', err)
      }
    }
  }

  const removeMeeting = () => {
    SetShowModal(false)
    if (dataToRemove.dayPeriod == 0) {
      delete schedule.morningAppointments[dataToRemove.indexMeeting]
      setSchedule(schedule)
    } else {
      delete schedule.afternoonAppointments[dataToRemove.indexMeeting]
      setSchedule(schedule)
    }
    handlerSendIndex(dataToRemove.appointmentId)
  }

  function currentMinutes(): number {
    const date = new Date()
    return date.getHours() * 60 + date.getMinutes()
  }

  function minutesOfNextMeeting(startingTime: string): number {
    return (
      parseInt(startingTime[0] + startingTime[1], 10) * 60 +
      parseInt(startingTime[3] + startingTime[4], 10)
    )
  }

  function getDay(): number {
    const date = new Date()
    return date.getDate()
  }

  function getDayOfTheWeek(): string {
    const date = new Date()
    const days = [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado'
    ]
    return days[date.getDay()]
  }

  function getHourOfNextMeeting(indexAndPeriod: number[]): string {
    if (indexAndPeriod != null && indexAndPeriod[0] != -1) {
      if (
        indexAndPeriod[1] == 0 &&
        schedule.morningAppointments[indexAndPeriod[0]].startingTime != null
      ) {
        return schedule.morningAppointments[indexAndPeriod[0]].startingTime
      } else if (
        schedule.afternoonAppointments[indexAndPeriod[0]].startingTime != null
      ) {
        return schedule.afternoonAppointments[indexAndPeriod[0]].startingTime
      }
    }
    return ''
  }

  function getTitleOfNextMeeting(indexAndPeriod: number[]): string {
    if (indexAndPeriod != null && indexAndPeriod[0] != -1) {
      if (
        indexAndPeriod[1] == 0 &&
        schedule.morningAppointments[indexAndPeriod[0]].title != null
      ) {
        return schedule.morningAppointments[indexAndPeriod[0]].title
      } else if (
        schedule.afternoonAppointments[indexAndPeriod[0]].title != null
      ) {
        return schedule.afternoonAppointments[indexAndPeriod[0]].title
      }
    }
    return ''
  }

  function getIndexAndPeriodOfNextMeeting(): number[] {
    const indexAndPeriod = []
    let i = 0
    indexAndPeriod[0] = -1

    if (schedule != null) {
      if (
        currentMinutes() < 720 &&
        schedule.morningAppointments != null &&
        schedule.morningAppointments.length > 0
      ) {
        // Morning
        for (i = 0; i < schedule.morningAppointments.length; i++) {
          if (
            schedule.morningAppointments[i] != null &&
            schedule.morningAppointments[i].startingTime != null &&
            minutesOfNextMeeting(
              schedule.morningAppointments[i].startingTime
            ) >= currentMinutes()
          ) {
            // Next meeting
            indexAndPeriod[0] = i
            indexAndPeriod[1] = 0
            return indexAndPeriod
          }
        }
      } else {
        // Afternoon
        if (
          schedule.afternoonAppointments != null &&
          schedule.afternoonAppointments.length > 0
        ) {
          for (i = 0; i < schedule.afternoonAppointments.length; i++) {
            if (
              schedule.afternoonAppointments[i] != null &&
              schedule.afternoonAppointments[i].startingTime != null &&
              minutesOfNextMeeting(
                schedule.afternoonAppointments[i].startingTime
              ) >= currentMinutes()
            ) {
              // Next meeting
              indexAndPeriod[0] = i
              indexAndPeriod[1] = 1
              return indexAndPeriod
            }
          }
        }
      }
    }
    return indexAndPeriod
  }

  function DrawNextMeeting() {
    const index = getIndexAndPeriodOfNextMeeting()

    if (index[0] == -1) {
      return (
        <div className={styles.nextAppointment}>
          <strong>Não tem nenhuma próxima reunião agendada</strong>
        </div>
      )
    } else {
      return (
        <div className={styles.nextAppointment}>
          <strong>Próximo item da agenda</strong>
          <div>
            <strong>
              {getTitleOfNextMeeting(getIndexAndPeriodOfNextMeeting())}
            </strong>
            <span>
              <FiClock />
              {getHourOfNextMeeting(getIndexAndPeriodOfNextMeeting())}
            </span>
          </div>
        </div>
      )
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
            removeMeeting={removeMeeting}
            meetingDetails={meetingDetails}
          />
        }
      />
      <div className={styles.schedule}>
        <div className={styles.header}>
          <div>
            <h1>Agenda Diária</h1>
            <p>
              <span>Hoje | </span>
              <span>Dia {getDay()} |</span>
              <span>{getDayOfTheWeek()}</span>
            </p>
          </div>
          <button
            className={styles.addButton}
            onClick={() => {
              setMeetingDetails(null)
              setUpdateSchedule(false)
              SetShowModal(true)
            }}
          >
            <BsPlusCircle />
          </button>
        </div>

        {DrawNextMeeting()}
        <div className={styles.scrollFlex}>
          <section className={styles.section}>
            <strong>Manhã</strong>
            {schedule &&
              schedule.morningAppointments.map((value, index) => (
                <div
                  className={styles.appointment}
                  key={`${value.startingDate}-${index}`}
                  onClick={() => {
                    setUpdateSchedule(true)
                    SetShowModal(true)
                    setMeetingDetails(schedule.morningAppointments[index])
                    setDataToRemove({
                      indexMeeting: index,
                      dayPeriod: 0,
                      appointmentId: value.id
                    })
                  }}
                >
                  <span>
                    <FiClock />
                    {value.startingTime}
                  </span>
                  <div>
                    <strong>{value.title}</strong>
                  </div>
                </div>
              ))}
          </section>

          <section className={styles.section}>
            <strong>Tarde</strong>
            {schedule &&
              schedule.afternoonAppointments.map((value, index) => (
                <div
                  className={styles.appointment}
                  key={`${value.startingDate}-${index}`}
                  onClick={() => {
                    setUpdateSchedule(true)
                    SetShowModal(true)
                    setMeetingDetails(schedule.afternoonAppointments[index])
                    setDataToRemove({
                      indexMeeting: index,
                      dayPeriod: 1,
                      appointmentId: value.id
                    })
                  }}
                >
                  <span>
                    <FiClock />
                    {value.startingTime}
                  </span>
                  <div>
                    <strong>{value.title}</strong>
                  </div>
                </div>
              ))}
          </section>
        </div>
      </div>
    </div>
  )
}
