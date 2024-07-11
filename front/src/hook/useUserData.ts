import { IOrders, IUser } from "@/interfaces/types";
import { getOrders } from "@/lib/server/petitionProducts";
import React from "react";

const useUserData = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [token, setToken] = React.useState<string>("");
  const [userData, setUserData] = React.useState<IUser>({
    name: "",
    email: "",
    address: "",
    phone: "",
    orders: [],
  });
  const [orders, setOrders] = React.useState<IOrders[]>([]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("userToken");
      if (storedToken) {
        setToken(storedToken);
        setIsLoggedIn(true);
      }
    }
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
    }
  }, []);

  React.useEffect(() => {
    if (token) {
      getOrders(token, setOrders);
    }
  }, [token]);

  const saveToken = (token: string) => {
    if (typeof window !== "undefined") {
      if (token) {
        localStorage.setItem("userToken", token);
      }
    }
    setToken(token);
  };

  const saveUserData = (data: IUser) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("userData", JSON.stringify(data));
    }
    setUserData(data);
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("userData");
      localStorage.removeItem("userToken");
      setIsLoggedIn(false);
    }
  };

  return {
    isLoggedIn,
    setIsLoggedIn,
    token,
    orders,
    setOrders,
    setToken,
    userData,
    setUserData,
    saveUserData,
    saveToken,
    logout,
  };
};

export default useUserData;
