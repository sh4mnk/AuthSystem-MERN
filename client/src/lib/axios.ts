import axios from "axios";

const api = axios.create({
  baseURL: "https://authentication-mern-t82i.onrender.com/api",
  withCredentials: false,
});




export default api;