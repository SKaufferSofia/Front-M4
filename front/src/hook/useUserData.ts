import { IOrders, IUser } from "@/interfaces/types";
import { useState, useEffect } from "react";

const useUserData = () => {
  const [userData, setUserData] = useState<IUser>({
    name: "",
    email: "",
    address: "",
    phone: "",
    role: "user",
    orders: [],
  });
  const [orders, setOrders] = useState<IOrders[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
    }
  }, []);

  const saveUserData = (data: typeof userData) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("userData", JSON.stringify(data));
    }
    setUserData(data);
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("userData");
    }
    setUserData({
      name: "",
      email: "",
      address: "",
      phone: "",
      orders: [],
    });
  };

  return { userData, setUserData: saveUserData, logout, orders, setOrders };
};

export default useUserData;
