import { AxiosAdapter, AxiosResponse } from 'axios'
import { parseCookies } from 'nookies'
import { apiBackend } from '../apiClient'
import FormData from "form-data";
import {
  IGetDataUserServiceProps,
  IUserData,
  IUserDataComplete,
  ICardDietData
} from './GetDataUserService.interface'

export class GetDataUserService implements IGetDataUserServiceProps {
  getDataUser = async (): Promise<IUserData> => {
    const { data } = await apiBackend.get('/user/getUser', {
      headers: {
        Authorization: `Bearer ${parseCookies()['auth-token']}`
      }
    })
    return data
  }

  getDataUserComplete = async (): Promise<IUserDataComplete> => {
    const { data } = await apiBackend.get('/nutritionist/getNutritionistInfo', {
      headers: {
        Authorization: `Bearer ${parseCookies()['auth-token']}`
      }
    })
    return data
  }

  async updateProfilePick(ImageData: any): Promise<void> {
    var form = new FormData();
    form.append("profilePic", ImageData);
    const { data } = await apiBackend.put('user/updateUserProfilePic', form, {
      headers: {
        Authorization: `Bearer ${parseCookies()['auth-token']}`,
        "Content-Type": "multipart/form-data",
      },
    })
    return data
  }

  updateDataUser = async (
    userDate: IUserDataComplete
  ): Promise<IUserDataComplete> => {
    const test = mappingFields(userDate)
    const { data } = await apiBackend.put('user/updateUser', test, {
      headers: {
        Authorization: `Bearer ${parseCookies()['auth-token']}`
      }
    })
    return data
  }

  updateDataDietUser = async (
    patientID: string,
    dietData: ICardDietData[]
  ): Promise<AxiosResponse> => {
    console.log('Enviado alimento', dietData)

    const { data } = await apiBackend.put(
      'diet/updateDiet',
      mappingDiet(dietData),
      {
        headers: {
          Authorization: `Bearer ${parseCookies()['auth-token']}`
        },
        params: {
          patientID
        }
      }
    )
    return data
  }

  private makeid(): string {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 50; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}


const mappingFields = (userDate: IUserDataComplete) => {
  const body = {
    nutritionist: true,
    phone: userDate.phone,
    officeAddress: {
      cep: userDate.office.cep,
      state: userDate.office.state,
      city: userDate.office.city,
      neighborhood: userDate.office.neighborhood,
      street: userDate.office.street,
      number: userDate.office.number,
      officeName: userDate.office.officeName,
      officePhone: userDate.office.officePhone
    },
    birth: userDate.birth
  }
  return body
}

const mappingDiet = (dietData: ICardDietData[]) => {
  const body = []

  dietData.map((element) =>
    body.push({
      name: element.nameFeed,
      food: element.foods
    })
  )

  return body
}

