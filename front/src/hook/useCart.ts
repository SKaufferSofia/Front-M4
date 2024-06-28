import { useState, useEffect } from "react";
import IProduct from "@/components/products/types";

const useCart = () => {
  const getInitialCart = (): IProduct[] => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  };

  const [cart, setCart] = useState<IProduct[]>(getInitialCart);
  const [clientCart, setClientCart] = useState<IProduct[]>([]);

  useEffect(() => {
    setClientCart(cart);
  }, [cart]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const clearCart = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    setCart([]);
  };

  console.log("Cart:", cart);

  return { cart, setCart, clearCart, clientCart, setClientCart };
};

export default useCart;
