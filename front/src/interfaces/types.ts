//interface de usuarios
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

// interface de credenciales
export interface ICredential {
  id?: number;
  password: string;
}

// interface de productos
export interface IProduct {
  id?: number;
  name: string;
  description?: string;
  price?: number;
  stock?: number;
  image: string;
  categoryId?: number;
}

// interface de login
export interface ILoginForm {
  email: string;
  password: string;
}

// interface de errorres de login

export interface ILoginFormErrors {
  [key: string]: string;
}

// interface de registro
export interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: number;
}

// interface de errorres de registro
export interface IRegisterFormErrors {
  [key: string]: string;
}

// interface de ordenes
export interface IOrders {
  date: string;
  id: number;
  products: IProduct[];
  status: string;
}
