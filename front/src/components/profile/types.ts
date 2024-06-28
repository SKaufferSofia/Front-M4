import IProduct from "../products/types";

export interface OrderTypes {
  date: string;
  id: number;
  products: IProduct[];
  status: string;
}
