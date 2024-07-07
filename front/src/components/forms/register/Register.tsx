"use client";

import { Card, Input, Typography } from "@material-tailwind/react";

import "../../../app/store/page";
import { NEXT_PUBLIC_API_URL } from "@/lib/server/envs";
import React from "react";
import { validateRegister } from "../../../helpers/validate";
import { IRegisterForm, IRegisterFormErrors } from "@/interfaces/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "../form.module.css";
import Link from "next/link";

const API_LOCAL = NEXT_PUBLIC_API_URL;

const RegisterForm = () => {
  const router = useRouter();
  const [regiterData, setRegiterData] = React.useState<IRegisterForm>({
    name: "",
    phone: Number(),
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorData, setErrorData] = React.useState<IRegisterFormErrors>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegiterData({ ...regiterData, [name]: value });

    setErrorData(validateRegister({ ...regiterData, [name]: value }));
  };

  const PetitionRegister = async (): Promise<boolean> => {
    try {
      const response = await axios.post(
        `${API_LOCAL}/users/register/`,
        regiterData
      );
      return response.data;
    } catch (error) {
      alert("Error Register: " + error);
      return false;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (Object.keys(errorData).length === 0) {
      const registerSuccess = await PetitionRegister();
      if (registerSuccess) {
        alert("Register Success");
        router.push("/login");
      }
    } else {
      alert("Error Submit: Please fill out all fields correctly.");
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
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            variant="h6"
            color="pink"
            className="-mb-3 poppins-semibold"
          >
            Your Name
          </Typography>
          <Input
            type="text"
            name="name"
            value={regiterData.name}
            onChange={handleChange}
            size="lg"
            placeholder="Name"
            className="text-white !border-t-blue-gray-200 focus:!border-t-gray-900 poppins-regular"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            crossOrigin={undefined}
          />
          {errorData.name && (
            <Typography color="red" className="text-sm">
              {errorData.name}
            </Typography>
          )}
          <Typography
            variant="h6"
            color="pink"
            className="-mb-3 poppins-semibold"
          >
            Your Phone
          </Typography>
          <Input
            type="number"
            name="phone"
            value={regiterData.phone}
            onChange={handleChange}
            size="lg"
            placeholder="Phone"
            className="text-white !border-t-blue-gray-200 focus:!border-t-gray-900 poppins-regular"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            crossOrigin={undefined}
          />
          {errorData.phone && (
            <Typography color="red" className=" text-sm poppins-regular">
              {errorData.phone}
            </Typography>
          )}
          <Typography
            variant="h6"
            color="pink"
            className="-mb-3 poppins-semibold"
          >
            Your Adress
          </Typography>
          <Input
            type="text"
            name="address"
            value={regiterData.address}
            onChange={handleChange}
            size="lg"
            placeholder="Address"
            className="text-white !border-t-blue-gray-200 focus:!border-t-gray-900 poppins-regular"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            crossOrigin={undefined}
          />
          {errorData.address && (
            <Typography color="red" className=" text-sm poppins-regular">
              {errorData.address}
            </Typography>
          )}
          <Typography
            variant="h6"
            color="pink"
            className="-mb-3 poppins-semibold"
          >
            Your Email
          </Typography>
          <Input
            type="email"
            name="email"
            value={regiterData.email}
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
            <Typography color="red" className=" text-sm poppins-regular">
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
            value={regiterData.password}
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
          <Typography
            variant="h6"
            color="pink"
            className="-mb-3 poppins-semibold"
          >
            Confirm Password
          </Typography>
          <Input
            type="password"
            name="confirmPassword"
            value={regiterData.confirmPassword}
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
              {errorData.confirmPassword}
            </Typography>
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
