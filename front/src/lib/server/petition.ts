import axios from "axios";
const API_LOCAL = process.env.NEXT_PUBLIC_API_LOCAL;

export const fetchProducts = async () => {
  const response = await axios.get(`${API_LOCAL}/products`);
  const data = response.data;

  return data;
};

export const ProductDetailFetch = async (id: number) => {
  const response = await axios.get(`${API_LOCAL}/products/${id}`);
  const data = response.data;
  return data;
};
