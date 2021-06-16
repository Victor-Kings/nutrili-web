import React, { HTMLAttributes } from 'react'
import ReactDatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import './DatePicker.module.scss'

interface Props {
  isClearable?: boolean
  onChange: (date: Date) => any
  selectedDate: Date | undefined
  showPopperArrow?: boolean
}

const DatePicker = ({
  selectedDate,
  onChange,
  isClearable = false,
  showPopperArrow = false,
  ...props
}: Props & HTMLAttributes<HTMLElement>) => {
  return (
    <ReactDatePicker
      selected={selectedDate}
      onChange={onChange}
      isClearable={isClearable}
      showPopperArrow={showPopperArrow}
      {...props}
      showTimeSelect
      dateFormat="Pp"
    />
  )
}

export default DatePicker
