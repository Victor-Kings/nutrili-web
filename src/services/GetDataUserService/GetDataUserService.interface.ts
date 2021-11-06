export interface IUserData {
  email: string
  profilePicture: string | null
  name: string
}
export interface ICardDietData {
  nameFeed?: string
  foods?: string[]
}
export interface IUserDataComplete {
  name: string
  crnType: string
  score: number
  profilePic: string | null
  birth: string
  phone: string
  office: Address
  numberOfPatients: number
}
export interface Address {
  cep: string
  state: string
  city: string
  neighborhood: string
  street: string
  number: string
  officeName: string
  officePhone: string
}

export interface IPayloadUpdate {
  weight: number | undefined
  nutritionist: boolean | undefined
  crn: number | undefined
  crnType: string | undefined
  name: string | undefined
  gender: string | undefined
  birth: string | undefined
  phone: string | undefined
  height: number | undefined
  cpf: string | undefined
  email: string | undefined
  password: string | undefined
  personalAddress: Address | undefined
  officeAddress: Address | undefined
}
export interface IGetDataUserServiceProps {
  getDataUser: () => Promise<IUserData>
  getDataUserComplete: (
    userDate: IUserDataComplete
  ) => Promise<IUserDataComplete>
}
