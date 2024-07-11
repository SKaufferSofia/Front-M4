import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "./envs";
import { alertForm } from "@/utils/utils";
import { IProduct } from "@/interfaces/types";

const API_LOCAL = NEXT_PUBLIC_API_URL;

export const getProducts = async () => {
  const response = await axios.get(`${API_LOCAL}/products`);
  const data = response.data;

  return data;
};

export const getProductDetail = async (id: number) => {
  const response = await axios.get(`${API_LOCAL}/products/${id}`);
  const data = response.data;
  return data;
};

export const getOrders = async (token: string, setOrders: any) => {
  try {
    const response = await axios.get(`${API_LOCAL}/users/orders`, {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    });

    setOrders(response.data);
    return true;
  } catch (error) {
    alert("Error getting orders: " + error);
    return false;
  }
};

export const CheckoutOrders = async (cart: IProduct[], token: string) => {
  try {
    const products = cart.map((product: IProduct) => product.id);
    const response = await axios.post(
      `${API_LOCAL}/orders`,
      { products },
      {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      const axiosError = error.response.data.message;
      alertForm("error", "Checkout Failed", axiosError, "red");
    }
    return false;
  }
};
