import {userInstance} from "../lib/axios.ts";
import type {UpdateMyPassword} from "../interfaces";
import axios from "axios";

export const getMe = async () => {
  try {
    const {data} = await userInstance.get("/me");
    return data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      return null;
    }
    throw error;
  }
};
export const updateMyData = async (userData: FormData) => {
  const {data} = await userInstance.patch('/me', userData)
  return data
}
export const updateMyPassword = async (userData: UpdateMyPassword) => {
  const {data} = await userInstance.patch('/myPassword', userData)
  return data
}
export const deleteMyAccount = async () => {
  const {data} = await userInstance.delete('/me')
  return data
}
export const becomeHost = async () => {
  const {data} = await userInstance.patch('/become-host');
  return data
}