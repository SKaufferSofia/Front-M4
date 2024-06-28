"use client";
import useToken from "@/hook/useToken";
import axios from "axios";
import { useEffect } from "react";
import useUserData from "@/hook/useUserData";

const API_PUBLIC = process.env.NEXT_PUBLIC_API_LOCAL;

const OrdersComponent = () => {
  const { token } = useToken();
  const { orders, setOrders } = useUserData();

  const getOrders = async () => {
    try {
      const response = await axios.get(
        `https://front-m4.onrender.com/users/orders`,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) getOrders();
  }, [token]);

  return (
    <div>
      {orders.map((order) => (
        <div key={order.id}>
          <h2>{order.id}</h2>
          <p>{order.date}</p>
          <p>{order.products.map((product) => product.name)}</p>
        </div>
      ))}
    </div>
  );
};

export default OrdersComponent;
