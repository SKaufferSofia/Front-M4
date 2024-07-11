"use client";

import { Card, Input, Typography } from "@material-tailwind/react";
import "../../../app/store/page";
import React from "react";
import { validateRegister } from "../../../helpers/validate";
import { useRouter } from "next/navigation";
import useUserData from "@/hook/useUserData";
import useForm from "@/hook/useForm";
import styles from "../form.module.css";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { alertForm } from "@/utils/utils";
import { PetitionRegister } from "@/lib/server/petitionUser";

const RegisterForm = () => {
  const router = useRouter();
  const { isLoggedIn } = useUserData();
  if (isLoggedIn) {
    router.push("/home");
  }

  const {
    regiterData,
    errorRegister,
    setErrorRegister,
    setRegiterData,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
  } = useForm();

  const handleOnClickShowPassword = () => setShowPassword(!showPassword);
  const handleOnClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegiterData({ ...regiterData, [name]: value });

    setErrorRegister(validateRegister({ ...regiterData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (Object.keys(errorRegister).length === 0) {
      const registerSuccess = await PetitionRegister(regiterData);
      if (registerSuccess) {
        alertForm("success", "Register Success", "Redirecting...", "green");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } else {
      alertForm(
        "warning",
        "Register...",
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
          Register
        </Typography>
        <Typography color="white" className="mt-1 font-normal poppins-regular">
          Nice to meet you! Enter your details to register.
        </Typography>
        <Typography color="gray" className="mt-4 text-center poppins-regular">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-pink-500 poppins-semibold"
          >
            Sign In
          </Link>
        </Typography>
      </div>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-3">
          <Typography
            variant="h6"
            color="pink"
            className="-mb-3 poppins-semibold flex flex-row items-center gap-1"
          >
            Name
            {!regiterData.name && <p className="text-red-500 font-bold ">*</p>}
          </Typography>
          <Input
            type="text"
            name="name"
            value={regiterData.name}
            onChange={handleChange}
            size="lg"
            placeholder="Name"
            className="text-white !border-t-blue-gray-200 focus:!border-t-gray-900 poppins-regular"
            crossOrigin={undefined}
          />

          <Typography
            variant="h6"
            color="pink"
            className="-mb-3 poppins-semibold flex flex-row items-center gap-1"
          >
            Phone
            {!regiterData.phone && <p className="text-red-500 font-bold ">*</p>}
          </Typography>
          <Input
            type="number"
            name="phone"
            value={regiterData.phone}
            onChange={handleChange}
            size="lg"
            placeholder="Phone"
            className="text-white !border-t-blue-gray-200 focus:!border-t-gray-900 poppins-regular"
            crossOrigin={undefined}
          />

          <Typography
            variant="h6"
            color="pink"
            className="-mb-3 poppins-semibold flex flex-row items-center gap-1"
          >
            Adress
            {!regiterData.address && (
              <p className="text-red-500 font-bold ">*</p>
            )}
          </Typography>
          <Input
            type="text"
            name="address"
            value={regiterData.address}
            onChange={handleChange}
            size="lg"
            placeholder="Address"
            className="text-white !border-t-blue-gray-200 focus:!border-t-gray-900 poppins-regular"
            crossOrigin={undefined}
          />

          <Typography
            variant="h6"
            color="pink"
            className="-mb-3 poppins-semibold flex flex-row items-center gap-1"
          >
            Email
            {!regiterData.email && <p className="text-red-500 font-bold ">*</p>}
          </Typography>
          <Input
            type="email"
            name="email"
            value={regiterData.email}
            onChange={handleChange}
            size="lg"
            placeholder="name@mail.com"
            className="text-white !border-t-blue-gray-200 focus:!border-t-gray-900 poppins-regular"
            crossOrigin={undefined}
          />
          <div className="-mt-1">
            {errorRegister.email && (
              <Typography color="red" className=" text-xs poppins-regular">
                {errorRegister.email}
              </Typography>
            )}
          </div>

          <Typography
            variant="h6"
            color="pink"
            className="-mb-3 poppins-semibold flex flex-row items-center gap-1"
          >
            Password
            {!regiterData.password && (
              <p className="text-red-500 font-bold ">*</p>
            )}
          </Typography>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              value={regiterData.password}
              onChange={handleChange}
              size="lg"
              placeholder="********"
              className="text-white !border-t-blue-gray-200 focus:!border-t-gray-900 poppins-regular"
              crossOrigin={undefined}
            />
            <button type="button" onClick={handleOnClickShowPassword}>
              {showPassword ? (
                <FaEye
                  size={17}
                  className="absolute right-3 top-6 -translate-y-1/2 text-white"
                />
              ) : (
                <FaEyeSlash
                  size={17}
                  className="absolute right-3 top-6 -translate-y-1/2  text-pink-500"
                />
              )}
            </button>
            <div className="-mt-4">
              {errorRegister.password && (
                <Typography color="red" className=" text-xs poppins-regular">
                  {errorRegister.password}
                </Typography>
              )}
            </div>
          </div>

          <Typography
            variant="h6"
            color="pink"
            className="-mb-3 poppins-semibold flex flex-row items-center gap-1"
          >
            Confirm Password
            {!regiterData.confirmPassword && (
              <p className="text-red-500 font-bold ">*</p>
            )}
          </Typography>
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={regiterData.confirmPassword}
              onChange={handleChange}
              size="lg"
              placeholder="********"
              className="text-white !border-t-blue-gray-200 focus:!border-t-gray-900 poppins-regular"
              crossOrigin={undefined}
            />
            <button type="button" onClick={handleOnClickShowConfirmPassword}>
              {showConfirmPassword ? (
                <FaEye
                  size={17}
                  className="absolute right-3 top-6 -translate-y-1/2 text-white"
                />
              ) : (
                <FaEyeSlash
                  size={17}
                  className="absolute right-3 top-6 -translate-y-1/2  text-pink-500"
                />
              )}
            </button>
            <div className="-mt-4">
              {errorRegister.confirmPassword && (
                <Typography color="red" className=" text-xs poppins-regular">
                  {errorRegister.confirmPassword}
                </Typography>
              )}
            </div>
          </div>
        </div>
        <div className="mt-5">
          {!regiterData.confirmPassword && (
            <p className=" text-sm text-red-500 font-medium ">
              {" "}
              (*) All fields are required
            </p>
          )}
        </div>
        <div className="flex flex-col items-center gap-1 mt-6">
          <button type="submit" className="button">
            Register
          </button>
        </div>
      </form>
    </Card>
  );
};

export default RegisterForm;
