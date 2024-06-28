"use client";

import React from "react";
import styles from "../form.module.css";
import { Card, Input, Typography } from "@material-tailwind/react";
import { ILoginFormErrors } from "./types";
import { validate } from "./helpers/validate";
import { json } from "stream/consumers";
import useToken from "@/hook/useToken";
import axios from "axios";
import useUserData from "@/hook/useUserData";
import Link from "next/link";

const API_PUBLIC = process.env.NEXT_PUBLIC_API_LOCAL;

const LoginForm = () => {
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });
  const [errorData, setErrorData] = React.useState<ILoginFormErrors>({});

  const { setToken } = useToken();
  const { setUserData } = useUserData();

  const PetitionLogin = async () => {
    try {
      const response = await axios.post(`${API_PUBLIC}/users/login`, loginData);
      setToken(response.data.token); //viene de respuesta del json como una
      localStorage.setItem("userToken", response.data.token); //seteo el token del local storage como el nuevo token que viene del json

      // Guarda los datos del usuario
      setUserData(response.data.user);

      return true;
    } catch (error) {
      alert("Login Failed: Email or password incorrect");
      return false;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
    setErrorData(validate({ ...loginData, [name]: value }));
  };

  const handleSumbit = async (event: React.FormEvent) => {
    event.preventDefault();

    const errors = validate(loginData);
    setErrorData(errors);
    if (Object.keys(errorData).length === 0) {
      const loginSuccess = await PetitionLogin();
      if (loginSuccess) {
        alert("Login Success");
        window.location.href = "/store";
      }
    } else {
      alert("Login Failed: Please complete all fields correctly");
    }
  };

  return (
    <Card
      className={`${styles.colorForm} flex flex-col items-center justify-center poppins-regular relative z-10`}
      shadow={false}
    >
      <div className="flex flex-col items-center poppins-regular">
        <Typography variant="h4" color="pink" className="poppins-semibold">
          Login
        </Typography>
        <Typography color="white" className="mt-1 font-normal poppins-regular">
          Enter your details to sign in.
        </Typography>
      </div>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSumbit}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="pink" className="-mb-3">
            Email
          </Typography>
          <Input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            size="lg"
            placeholder="name@mail.com"
            className="text-white !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            crossOrigin={undefined}
          />
          {errorData.email && (
            <Typography color="red" className=" text-sm">
              {errorData.password}
            </Typography>
          )}
          <Typography variant="h6" color="pink" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            size="lg"
            placeholder="********"
            className="text-white !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            crossOrigin={undefined}
          />
          {errorData.password && (
            <Typography color="red" className=" text-sm">
              {errorData.password}
            </Typography>
          )}
        </div>
        <div className="flex flex-col items-center gap-1 mt-6">
          <button type="submit" className="button">
            Login
          </button>
          <Typography
            color="white"
            className="mt-4 text-center font-normal poppins-light"
          >
            You don´t have an account?{" "}
            <Link href="/login/register" className="font-medium text-pink-500">
              Sign up
            </Link>
          </Typography>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
