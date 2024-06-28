import { IRegisterForm, IRegisterFormErrors } from "../types";

export const validate = (data: IRegisterForm): IRegisterFormErrors => {
  const errors: IRegisterFormErrors = {};

  if (!data.name) {
    errors.name = "Name is required";
  }
  if (!data.email) {
    errors.email = "Email is required";
  }
  if (!data.password) {
    errors.password = "Password is required";
  }
  if (!data.address) {
    errors.address = "Address is required";
  }
  if (!data.phone) {
    errors.phone = "Phone is required";
  }

  return errors;
};
