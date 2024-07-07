import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "./envs";

const API_PUBLIC = NEXT_PUBLIC_API_URL;

export const getProducts = async () => {
  const response = await axios.get(`${API_PUBLIC}/products`);
  const data = response.data;

  return data;
};

export const getProductDetail = async (id: number) => {
  const response = await axios.get(`${API_PUBLIC}/products/${id}`);
  const data = response.data;
  return data;
};
