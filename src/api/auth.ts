import {authInstance} from "../lib/axios.ts";

export interface IRegisterUserData {
  name: string,
  email: string,
  password: string
}

export interface ILoginUserData {
  email: string,
  password: string
}

export const register = async (userData: IRegisterUserData) => {
  const {data} = await authInstance.post('/register', userData);
  return data
}
export const login = async (userData: ILoginUserData) => {
  const {data} = await authInstance.post('/login', userData);
  return data;
}