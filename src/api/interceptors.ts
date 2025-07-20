import axios from "axios";

const API_URL = "http://localhost:3000";

const Service = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
  },
});

Service.interceptors.request.use(
  (res) => res.data,
  (error) => {
    Promise.reject(error.response || error.message);
  },
);
export default Service;
