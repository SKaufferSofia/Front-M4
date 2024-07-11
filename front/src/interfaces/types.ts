export interface IUser {
  id?: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role?: string;
  orders: IOrders[];
}

export interface IProduct {
  id?: number;
  name: string;
  description?: string;
  price?: number;
  stock?: number;
  image: string;
  categoryId?: number;
}

export interface CheckoutCardProps {
  product: IProduct;
  removeById: (id: number) => void;
}

export interface IRegisterForm {
  name: string;
  email: string;
  address: string;
  phone: number;
  password: string;
  confirmPassword: string;
}

export interface IRegisterFormErrors {
  [key: string]: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface ILoginFormErrors {
  [key: string]: string;
}

export interface IOrders {
  date: string;
  id: number;
  products: IProduct[];
  status: string;
}

export type SaveToken = (arg: string) => void;
export type SaveUserData = (arg: IUser) => void;
