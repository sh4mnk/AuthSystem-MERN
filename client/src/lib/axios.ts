import axios from "axios";

const api = axios.create({
  baseURL: "https://authentication-mern-t82i.onrender.com/api",
  withCredentials: false,
});

console.log(process.env.NEXT_PUBLIC_API_URL);



export default api;