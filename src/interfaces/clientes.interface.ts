export interface IClients {
    _id: string;
    name: string;
    idade: number;
    data: string;
    cpf: string;
    endereco: string;
    medicao: {
      altura: number;
      imc: number;
      medida_a: number;
      medida_b: number;
      peso: number;
      medida_c: number;
      medida_d: number;
    };
  }