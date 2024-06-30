import { ILoginForm, ILoginFormErrors } from "@/interfaces/types";

export const validate = (data: ILoginForm): ILoginFormErrors => {
  const errors: ILoginFormErrors = {};

  if (!data.email) {
    errors.email = "Email is required";
  }
  if (!data.password) {
    errors.password = "Password is required";
  }

  return errors;
};
