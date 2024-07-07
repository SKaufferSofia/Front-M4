import {
  IRegisterForm,
  IRegisterFormErrors,
  ILoginForm,
  ILoginFormErrors,
} from "@/interfaces/types";

export const validateRegister = (data: IRegisterForm): IRegisterFormErrors => {
  const errors: IRegisterFormErrors = {};

  if (!data.name) {
    errors.name = "Name is required";
  }

  if (!data.address) {
    errors.address = "Address is required";
  }
  if (!data.phone) {
    errors.phone = "Phone is required";
  }

  if (!data.email) {
    errors.email = "Email is required";
  }

  if (data.email && !/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Invalid email address";
  }

  if (!data.password) {
    errors.password = "Password is required";
  }

  if (data.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }
  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

export const validateLogin = (data: ILoginForm): ILoginFormErrors => {
  const errors: ILoginFormErrors = {};

  if (!data.email) {
    errors.email = "Email is required";
  }
  if (!data.password) {
    errors.password = "Password is required";
  }

  return errors;
};
