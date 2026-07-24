import axios from "axios";
// Auth Instance
const baseAuthURL = `${import.meta.env.VITE_API_URL}/auth`
export const authInstance = axios.create({
  baseURL: baseAuthURL,
  withCredentials: true
});
// User Instance
const baseUserURL = `${import.meta.env.VITE_API_URL}/user`
export const userInstance = axios.create({
  baseURL: baseUserURL,
  withCredentials: true
});

// Property Instance
const basePropertyUrl = `${import.meta.env.VITE_API_URL}/properties`
export const propertiesInstance = axios.create({
  baseURL: basePropertyUrl,
  withCredentials: true
})

// Save Property Instance
const baseSavePropertyUrl = `${import.meta.env.VITE_API_URL}/saved`
export const savePropertiesInstance = axios.create({
  baseURL: baseSavePropertyUrl,
  withCredentials: true
})
// Admin Instance
const baseAdminUrl = `${import.meta.env.VITE_API_URL}/admin`
export const adminInstance = axios.create({
  baseURL: baseAdminUrl,
  withCredentials: true
})
// Booking Instance
const baseBookingUrl = `${import.meta.env.VITE_API_URL}/bookings`
export const bookingInstance = axios.create({
  baseURL: baseBookingUrl,
  withCredentials: true
})
const baseReviewUrl = `${import.meta.env.VITE_API_URL}/reviews`
export const reviewsInstance = axios.create({
  baseURL: baseReviewUrl,
  withCredentials: true
})