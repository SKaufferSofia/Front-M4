import {
  ILoginForm,
  ILoginFormErrors,
  IRegisterForm,
  IRegisterFormErrors,
} from "@/interfaces/types";
import React from "react";

const useForm = () => {
  const [regiterData, setRegiterData] = React.useState<IRegisterForm>({
    name: "",
    phone: Number(),
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorRegister, setErrorRegister] = React.useState<IRegisterFormErrors>(
    {}
  );

  const [loginData, setLoginData] = React.useState<ILoginForm>({
    email: "",
    password: "",
  });
  const [errorLogin, setErrorLogin] = React.useState<ILoginFormErrors>({});

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  return {
    regiterData,
    setRegiterData,
    errorRegister,
    setErrorRegister,
    loginData,
    setLoginData,
    errorLogin,
    setErrorLogin,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
  };
};

export default useForm;
