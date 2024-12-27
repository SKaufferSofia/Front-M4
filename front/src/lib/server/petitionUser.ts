import { NEXT_PUBLIC_API_URL } from "./envs";
import axios from "axios";
import { alertForm } from "@/utils/utils";
import {
  ILoginForm,
  IRegisterForm,
  SaveToken,
  SaveUserData,
} from "@/interfaces/types";
import { useRouter } from "next/navigation";

const API_LOCAL = NEXT_PUBLIC_API_URL;

export const PetitionRegister = async (
  regiterData: IRegisterForm
): Promise<boolean> => {
  try {
    const response = await axios.post(
      `${API_LOCAL}/users/register/`,
      regiterData
    );
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      const axiosError = error.response.data.message;
      alertForm("error", "Register Failed", axiosError, "red");
    }
    return false;
  }
};

export const PetitionLogin = async (
  loginData: ILoginForm,
  saveToken: SaveToken,
  saveUserData: SaveUserData
): Promise<boolean> => {
  try {
    const response = await axios.post(`${API_LOCAL}/users/login`, loginData);
    saveToken(response.data.token);
    saveUserData(response.data.user);
    return true;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      const axiosError = error.response.data.message;
      alertForm("error", "Login Failed", axiosError, "red");
    }

    return false;
  }
};
