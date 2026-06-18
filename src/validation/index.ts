import {z} from 'zod'
// Register Form Schema
export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(8, "Name must be at least 8 characters")
    .max(50, "Name is too long"),
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
  confirm_password: z
    .string()
    .min(8, "Password confirm must be at least 8 characters")
}).refine((data) => data.password === data.confirm_password, {
  error: 'Passwords do not match',
  path: ['confirm_password']
});
// Login Form Schema
export const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
})

export const recoveryEmailSchema = z.object(
  {email: z.email("Invalid email address")}
)