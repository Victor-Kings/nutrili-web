export interface IUserData {
  email: string
  profilePicture: string | null
  name: string
}

export interface IGetDataUserServiceProps {
  getDataUser: () => Promise<IUserData>
}
