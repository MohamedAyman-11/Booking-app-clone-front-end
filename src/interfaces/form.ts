import type {ElementType} from "react";
import {z} from "zod";
import {loginSchema, registerSchema} from "../validation";

type RegisterInput = z.infer<typeof registerSchema>;
type LoginInput = z.infer<typeof loginSchema>;

export interface DASHBOARD_ITEMS {
  text: string;
  icon: ElementType;
  path: string;
}

export interface FormField<T> {
  name: keyof T;
  type: string;
  id: string;
  label: string;
  placeholder: string;
}

export type REGISTER_FIELDS = FormField<RegisterInput>

export type LOGIN_FIELDS = FormField<LoginInput>