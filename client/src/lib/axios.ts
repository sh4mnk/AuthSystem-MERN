import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_URL ??
  (typeof window === "undefined" ? "http://localhost:5000/api" : "/api");

const api = axios.create({
  baseURL,
  // withCredentials is only needed when sending cookies or HTTP auth headers
  // to a cross-origin backend. This app currently does not use cookie-based auth,
  // so removing it avoids CORS credential issues in production.
});

export default api;