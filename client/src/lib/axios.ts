import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_URL ??
  (typeof window === "undefined" ? "http://localhost:5000/api" : "/api");

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;