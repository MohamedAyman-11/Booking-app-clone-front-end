import {AMENITIES_DATA} from "../constants";
import {z} from "zod";
import {
  type loginSchema,
  otpFormSchema,
  propertySchema,
  recoveryEmailSchema,
  registerSchema,
  resetPasswordSchema,
  restoreAccountSchema,
  updatePropertySchema
} from "../validation";

export type TAmenities = keyof typeof AMENITIES_DATA;
export type LoginSchema = z.infer<typeof loginSchema>
export type RegisterSchema = z.infer<typeof registerSchema>
export type ForgotPasswordSchema = z.infer<typeof recoveryEmailSchema>
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
export type SendOtpSchema = z.infer<typeof restoreAccountSchema>;
export type ActivateAccountSchema = z.infer<typeof otpFormSchema>;
export type PropertySchema = z.infer<typeof propertySchema>
export type UpdatePropertySchema = z.infer<typeof updatePropertySchema>
