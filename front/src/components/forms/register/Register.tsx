"use client";

import { Card, Input, Button, Typography } from "@material-tailwind/react";

import "../../../app/store/page";
import React from "react";
import { validate } from "./helpers/validate";
import { IRegisterForm, IRegisterFormErrors } from "@/interfaces/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "../form.module.css";
import Link from "next/link";

const API_LOCAL = process.env.NEXT_PUBLIC_API_LOCAL;

const RegisterForm = () => {
  const router = useRouter();
  const [regiterData, setRegiterData] = React.useState<IRegisterForm>({
    name: "",
    phone: Number(),
    address: "",
    email: "",
    password: "",
  });

  const [errorData, setErrorData] = React.useState<IRegisterFormErrors>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegiterData({ ...regiterData, [name]: value });

    setErrorData(validate({ ...regiterData, [name]: value }));
  };

  const PetitionRegister = async (): Promise<boolean> => {
    try {
      const response = await axios.post(
        `${API_LOCAL}/users/register/`,
        regiterData
      );
      console.log(response.data);
      alert("Register Success");
      return true;
    } catch (error) {
      console.log(error, "error");
      alert("Error Register: Please try again later.");
      return false;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const errors = validate(regiterData);
    setErrorData(errors);

    if (Object.keys(errors).length === 0) {
      const registerSuccess = await PetitionRegister();
      if (registerSuccess) {
        router.push("/login");
      }
    } else {
      alert("Error Submit: Please fill out all fields correctly.");
      console.log("Error Submit", errors);
    }
  };

  return (
    <Card
      className={`${styles.colorForm} flex flex-col items-center justify-center poppins-regular relative z-10`}
      shadow={false}
    >
      <div className="flex flex-col items-center poppins-regular">
        <Typography variant="h4" color="pink" className="poppins-semibold">
          Register
        </Typography>
        <Typography color="white" className="mt-1 font-normal poppins-regular">
          Nice to meet you! Enter your details to register.
        </Typography>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-pink-500">
            Sign In
          </Link>
        </Typography>
      </div>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="pink" className="-mb-3">
            Your Name
          </Typography>
          <Input
            type="text"
            name="name"
            value={regiterData.name}
            onChange={handleChange}
            size="lg"
            placeholder="Name"
            className="text-white !border-t-blue-gray-200 focus:!border-t-gray-900"
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
          <Typography variant="h6" color="pink" className="-mb-3">
            Your Phone
          </Typography>
          <Input
            type="number"
            name="phone"
            value={regiterData.phone}
            onChange={handleChange}
            size="lg"
            placeholder="Phone"
            className="text-white !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            crossOrigin={undefined}
          />
          {errorData.phone && (
            <Typography color="red" className=" text-sm">
              {errorData.phone}
            </Typography>
          )}
          <Typography variant="h6" color="pink" className="-mb-3">
            Your Adress
          </Typography>
          <Input
            type="text"
            name="address"
            value={regiterData.address}
            onChange={handleChange}
            size="lg"
            placeholder="Address"
            className="text-white !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            crossOrigin={undefined}
          />
          {errorData.address && (
            <Typography color="red" className=" text-sm">
              {errorData.address}
            </Typography>
          )}
          <Typography variant="h6" color="pink" className="-mb-3">
            Your Email
          </Typography>
          <Input
            type="email"
            name="email"
            value={regiterData.email}
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
              {errorData.email}
            </Typography>
          )}
          <Typography variant="h6" color="pink" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            name="password"
            value={regiterData.password}
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
            Register
          </button>
        </div>
      </form>
    </Card>
  );
};

export default RegisterForm;
