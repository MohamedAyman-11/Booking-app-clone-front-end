import type {ElementType} from 'react';
import type {loginSchema, registerSchema} from "../validation";
import {z} from 'zod'

type TInput = z.infer<typeof registerSchema>
type TLoginInput = z.infer<typeof loginSchema>

export interface IDropMenu {
  text: string;
  icon: ElementType;
}

export interface IRegisterForm {
  name: keyof TInput;
  type: string;
  id: string;
  placeholder: string,
  label: string,
}

export interface ILoginForm {
  name: keyof TLoginInput;
  type: string;
  id: string;
  placeholder: string,
  label: string,
}
