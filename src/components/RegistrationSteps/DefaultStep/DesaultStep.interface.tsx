import { ChangeEvent } from 'toasted-notes/node_modules/@types/react'

export interface IDefaultStep {
  show: boolean
  checkedItems: boolean
  showPassword: (e: ChangeEvent) => void
  handlerNextStep:(value:any, isDefaultStep:boolean) => void
}
