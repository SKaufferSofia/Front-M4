"use client";

import React from "react";
import { NEXT_PUBLIC_API_URL } from "@/lib/server/envs";
import styles from "../form.module.css";
import { Card, Input, Typography } from "@material-tailwind/react";
import { validateLogin } from "@/helpers/validate";
import axios from "axios";
import useUserData from "@/hook/useUserData";
import Link from "next/link";
import { ILoginForm, ILoginFormErrors } from "@/interfaces/types";

const API_PUBLIC = NEXT_PUBLIC_API_URL;

const LoginForm = () => {
  const [loginData, setLoginData] = React.useState<ILoginForm>({
    email: "",
    password: "",
  });
  const [errorData, setErrorData] = React.useState<ILoginFormErrors>({});

  const { saveToken, saveUserData } = useUserData();

  const PetitionLogin = async () => {
    try {
      const response = await axios.post(`${API_PUBLIC}/users/login`, loginData);
      saveToken(response.data.token);
      saveUserData(response.data.user);

      return true;
    } catch (error) {
      alert("Login Failed: " + error);
      return false;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
    setErrorData(validateLogin({ ...loginData, [name]: value }));
  };

  const handleSumbit = async (event: React.FormEvent) => {
    event.preventDefault();

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
      className={`${styles.colorForm} flex flex-col items-center justify-center poppins-regular relative z-10 m-7`}
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
          <Typography
            variant="h6"
            color="pink"
            className="-mb-3 poppins-semibold"
          >
            Email
          </Typography>
          <Input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            size="lg"
            placeholder="name@mail.com"
            className="text-white !border-t-blue-gray-200 focus:!border-t-gray-900 poppins-regular"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            crossOrigin={undefined}
          />
          {errorData.email && (
            <Typography color="red" className="poppins-regular text-sm">
              {errorData.email}
            </Typography>
          )}
          <Typography
            variant="h6"
            color="pink"
            className="-mb-3 poppins-semibold"
          >
            Password
          </Typography>
          <Input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            size="lg"
            placeholder="********"
            className="text-white !border-t-blue-gray-200 focus:!border-t-gray-900 poppins-regular"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            crossOrigin={undefined}
          />
          {errorData.password && (
            <Typography color="red" className=" text-sm poppins-regular">
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
