export interface IUser {
  id?: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role?: string;
  credential?: ICredential;
  orders: IOrders[];
}

export interface ICredential {
  id?: number;
  password: string;
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

export interface ILoginForm {
  email: string;
  password: string;
}

export interface ILoginFormErrors {
  [key: string]: string;
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

export interface IOrders {
  date: string;
  id: number;
  products: IProduct[];
  status: string;
}
