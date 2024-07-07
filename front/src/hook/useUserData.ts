import { useState, useEffect } from "react";

const useUserData = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    role: "",
    orders: [Object],
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("userToken");
      if (storedToken) {
        setToken(storedToken);
        setIsLoggedIn(true);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
    }
  }, []);

  const saveToken = (token: string) => {
    if (typeof window !== "undefined") {
      if (token) {
        localStorage.setItem("userToken", token);
        setIsLoggedIn(true);
      }
    }
    setToken(token);
  };

  const saveUserData = (data: typeof userData) => {
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
    setToken,
    userData,
    setUserData,
    saveUserData,
    saveToken,
    logout,
  };
};

export default useUserData;
