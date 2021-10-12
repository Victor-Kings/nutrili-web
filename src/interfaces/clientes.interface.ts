export interface IClients {
  _id: string
  name: string
  idade: number
  data: string
  cpf: string
  endereco: string
  medicao: {
    altura: number
    imc: number
    medida_a: number
    medida_b: number
    peso: number
    medida_c: number
    medida_d: number
  }
}

export interface AnswerList {
  idQuestion: number
  answer: string
  question: string
}
export interface NutritionistRequest {
  requestId: string
  name: string
  age: number
  date: string
  cpf: string
  address: string
  measure: {
    height: number
    weight: number
    bmi: number
  }
  answerList: AnswerList[]
}

export interface IClientsData {
  nutritionistList: NutritionistRequest[]
  numberOfPatient: number
  numberOfPendingRequest: number
}
