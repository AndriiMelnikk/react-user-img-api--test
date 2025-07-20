import axios from "axios";

const API_URL =
  "http://localhost:8080/";

const Service = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

Service.interceptors.request.use(
  (res) => res,
  (error) => {
    Promise.reject(error.response || error.message);
  },
);
export default Service;
