import { useState, useEffect } from "react";

const useToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("userToken");
      setToken(storedToken);
    }
  }, []);

  const saveToken = (token: string | null) => {
    if (typeof window !== "undefined") {
      if (token) {
        localStorage.setItem("userToken", token);
      } else {
        localStorage.removeItem("userToken");
      }
    }
    setToken(token);
  };

  return { token, setToken: saveToken };
};

export default useToken;
