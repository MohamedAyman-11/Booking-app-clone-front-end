import {authInstance} from "../lib/axios.ts";
import type {
  ActivateAccount,
  ForgotPassword,
  LoginUserData,
  Oauth,
  ResetPasswordData,
  SendOtpData
} from "../interfaces";


export const register = async (userData: FormData) => {
  const {data} = await authInstance.post('/register', userData);
  return data
}
export const login = async (userData: LoginUserData) => {
  const {data} = await authInstance.post('/login', userData);
  return data;
}
export const googleAuth = async (userData: Oauth) => {
  const {data} = await authInstance.post('/google', userData);
  return data;
}
export const logout = async () => {
  const {data} = await authInstance.post('/logout');
  return data
}
export const forgotPassword = async (userData: ForgotPassword) => {
  const {data} = await authInstance.post('/forgotPassword', userData);
  return data;
}
export const resetPassword = async (userData: ResetPasswordData) => {
  const {token, password} = userData
  const {data} = await authInstance.patch(`/resetPassword/${token}`, {password});
  return data
}
export const sendOtp = async (userData: SendOtpData) => {
  const {data} = await authInstance.post('/sendOtp', {email: userData.email})
  return data
}
export const activateAccount = async (userData: ActivateAccount) => {
  const {data} = await authInstance.post('/activate-account', userData);
  return data
}
