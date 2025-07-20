import axios from "axios";

const API_URL =
  "https://6b0c329c-acfe-4543-8454-c9f518e81aed-00-10it4wmkw0pj0.janeway.replit.dev/";

const Service = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
  },
});

Service.interceptors.request.use(
  (res) => res,
  (error) => {
    Promise.reject(error.response || error.message);
  },
);
export default Service;
