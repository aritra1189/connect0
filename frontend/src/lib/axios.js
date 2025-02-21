import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://connect0-1.onrender.com/api" : "/api",
  withCredentials: true,
});
