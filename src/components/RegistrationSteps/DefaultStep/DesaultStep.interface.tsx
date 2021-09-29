import { ChangeEvent } from 'toasted-notes/node_modules/@types/react'

export interface IDefaultStep {
  show: boolean
  checkedItems: boolean
  handleClick: (e: ChangeEvent) => void
}
