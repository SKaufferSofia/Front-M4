export interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: number;
}

export interface IRegisterFormErrors {
  [key: string]: string;
}
