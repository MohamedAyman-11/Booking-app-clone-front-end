export interface LoginUserData {
  email: string;
  password: string;
}

export interface Oauth {
  credential: string;
}

export interface ForgotPassword {
  email: string;
}

export interface SendOtpData {
  email: string;
}

export interface ResetPasswordData {
  password: string;
  token: string;
}

export interface ActivateAccount {
  otp: string;
}

export interface UpdateMyPassword {
  currentPassword: string;
  newPassword: string;
}