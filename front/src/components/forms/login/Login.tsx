"use client";
import React from "react";
import styles from "../form.module.css";
import { Card, Input, Typography } from "@material-tailwind/react";
import { validateLogin } from "@/helpers/validate";
import useUserData from "@/hook/useUserData";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useForm from "@/hook/useForm";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { alertForm } from "@/utils/utils";
import { PetitionLogin } from "@/lib/server/petitionUser";

const LoginForm = () => {
  const router = useRouter();
  const { isLoggedIn, saveToken, saveUserData } = useUserData();

  if (isLoggedIn) {
    router.push("/home");
  }

  const {
    loginData,
    setLoginData,
    errorLogin,
    setErrorLogin,
    showPassword,
    setShowPassword,
  } = useForm();

  const handleOnclickPassword = () => setShowPassword(!showPassword);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
    setErrorLogin(validateLogin({ ...loginData, [name]: value }));
  };

  const handleSumbit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (Object.keys(errorLogin).length === 0) {
      const loginSuccess = await PetitionLogin(
        loginData,
        saveToken,
        saveUserData
      );
      if (loginSuccess) {
        alertForm("success", "Login Success", "Redirecting...", "green");
        setTimeout(() => {
          window.location.href = "/store";
        }, 2000);
      }
    } else {
      alertForm(
        "warning",
        "Login...",
        "Please complete all fields correctly",
        "orange"
      );
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
        <div className="mb-1 flex flex-col gap-3">
          <Typography
            variant="h6"
            color="pink"
            className="-mb-3 poppins-semibold flex flex-row items-center gap-1"
          >
            Email
            {!loginData.email && <p className="text-red-500 font-bold ">*</p>}
          </Typography>

          <Input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            size="lg"
            placeholder="name@mail.com"
            className="text-white !border-t-blue-gray-200 focus:!border-t-gray-900 poppins-regular"
            crossOrigin={undefined}
          />
          <div className="-mt-2">
            {errorLogin.email && (
              <Typography color="red" className="poppins-regular text-sm">
                {errorLogin.email}
              </Typography>
            )}
          </div>

          <Typography
            variant="h6"
            color="pink"
            className="-mb-3 poppins-semibold flex flex-row items-center gap-1"
          >
            Password
            {!loginData.password && (
              <p className="text-red-500 font-bold ">*</p>
            )}
          </Typography>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              value={loginData.password}
              onChange={handleChange}
              size="lg"
              placeholder="********"
              className="text-white !border-t-blue-gray-200 focus:!border-t-gray-900 poppins-regular"
              crossOrigin={undefined}
            />
            <button type="button" onClick={handleOnclickPassword}>
              {showPassword ? (
                <FaEye
                  size={17}
                  className="absolute right-3 top-6 -translate-y-1/2 text-white"
                />
              ) : (
                <FaEyeSlash
                  size={17}
                  className="absolute right-3 top-6 -translate-y-1/2 text-white"
                />
              )}
            </button>
            <div className="mt-1">
              {!loginData.password && (
                <p className=" text-sm text-red-500 font-medium ">
                  {" "}
                  (*) All fields are required
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 mt-6">
          <button
            type="submit"
            className="button"
            disabled={
              (!loginData.email && !loginData.password) ||
              !loginData.email ||
              !loginData.password
            }
          >
            Login
          </button>

          <Typography
            color="white"
            className="mt-4 text-center font-normal poppins-light"
          >
            You don´t have an account?{" "}
            <Link
              href="/login/register"
              className="font-medium text-pink-500 hover:text-pink-500 hover:scale-105 hover:transition-all hover:font-bold hover:shadow-pink-400"
            >
              Sign up
            </Link>
          </Typography>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
