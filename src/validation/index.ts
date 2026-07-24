import {z} from 'zod'
import {AMENITIES, PROPERTY_TYPES} from "../constants";
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
// Recovery Form Schema
export const recoveryEmailSchema = z.object(
  {email: z.email("Invalid email address")}
)
// Reset Password Form Schema
export const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
  password_confirm: z
    .string()
    .min(8, "Password confirm must be at least 8 characters")
}).refine(data => data.password === data.password_confirm, {
  error: 'Passwords do not match',
  path: ['password_confirm']
})
// Restore Account Form Schema
export const restoreAccountSchema = z.object(
  {email: z.email("Invalid email address")}
)
// Enter OTP Form Schema
export const otpFormSchema = z.object({
  otp: z
    .string()
    .length(6, 'OTP must be 6 digits')
    .regex(/^\d+$/, 'OTP must contain only numbers')
});
// Update User Data Schema
export const userDataSchema = z.object({
  name: z
    .string()
    .trim()
    .min(8, "Name must be at least 8 characters")
    .max(50, "Name is too long"),
  email: z.email("Invalid email address")
})
// Update User Password Schema
export const userPasswordSchema = z.object({
  current_password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
  new_password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
  new_password_confirm: z
    .string()
    .min(8, "Password must be at least 8 characters"),
}).refine(data => data.new_password === data.new_password_confirm, {
  error: 'Passwords do not match',
  path: ['new_password_confirm']
}).refine(data => data.current_password !== data.new_password, {
  error: "New password must be different from current password",
  path: ["new_password"],
})

// PROPERTY SCHEMA

export const propertySchema = z.object({
  name: z.string().trim().min(8, "Name must be at least 8 characters").max(80, 'Name must be at most 80 character'),
  stars: z.number().int("Stars must be a whole number").min(1, 'Stars must be at least 1 stars').max(5, 'Stars must be at most 5 stars'),
  description: z.string().trim().min(40, "Description must be at least 40 characters").max(1000, 'Description must be at most 1000 character'),
  pricePerNight: z.number().positive("Price per night must be greater than 0"),
  discount: z.number().min(0, "Discount cannot be negative").max(100, "Discount cannot exceed 100%"),
  guests: z.number().int().min(1, 'Guest number must be at least 1'),
  bedrooms: z.number().int().min(1, 'Bedroom number must be at least 1'),
  beds: z.number().int().min(1, 'Beds number must be at least 1'),
  bathrooms: z.number().int().min(1, 'Bathrooms number must be at least 1'),
  city: z.string().trim().min(2, "City name is too short"),
  country: z.string().trim().min(1, 'Country is requires'),
  images: z.array(z.instanceof(File)).min(5, "Upload at least 5 images").max(5, "Upload at most 5 images"),
  amenities: z.array(z.enum(AMENITIES)).min(1, "Please select at least one amenity"),
  propertyType: z.enum(PROPERTY_TYPES, 'Property type must be hotel or apartment or villa')
})

export const updatePropertySchema = propertySchema.extend({
  images: z.array(z.instanceof(File)).optional(),
});