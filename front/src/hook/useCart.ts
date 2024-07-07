import { IOrders, IProduct } from "@/interfaces/types";
import { useState, useEffect } from "react";

const useCart = () => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [orders, setOrders] = useState<IOrders[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, []);

  const addToCard = (product: IProduct) => {
    setCart((prevCart) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify([...prevCart, product]));
      }
      return [...prevCart, product];
    });
  };

  const clearCart = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
  };

  const removeById = (id: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      typeof window !== "undefined" &&
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return { cart, setCart, orders, setOrders, addToCard, clearCart, removeById };
};

export default useCart;
