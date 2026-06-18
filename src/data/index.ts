import type {ILoginForm, IRegisterForm} from "../interfaces";

export const RegisterFormData: IRegisterForm[] = [
  {
    type: 'text',
    name: 'name',
    id: 'name',
    placeholder: 'enter your name',
    label: 'Name'
  },
  {
    type: 'email',
    name: 'email',
    id: 'email',
    placeholder: 'enter your email address',
    label: 'Email address'
  },
  {
    type: 'password',
    name: 'password',
    id: 'password',
    placeholder: 'enter your password',
    label: 'Password'
  },
  {
    type: 'password',
    name: 'confirm_password',
    id: 'confirm_password',
    placeholder: 'enter your password again',
    label: 'Confirm password'
  },
]
export const LoginFormData: ILoginForm[] = [
  {
    type: 'email',
    name: 'email',
    id: 'email',
    placeholder: 'enter your email address',
    label: 'Email address'
  },
  {
    type: 'password',
    name: 'password',
    id: 'password',
    placeholder: 'enter your password',
    label: 'Password'
  },
]