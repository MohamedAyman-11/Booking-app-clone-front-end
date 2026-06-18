import axios from "axios";

const baseURL = `${import.meta.env.VITE_API_URL}/auth`
export const authInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json"
  }
});
