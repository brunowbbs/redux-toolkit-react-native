import axios from "axios";

const baseURL = "https://dummyjson.com";

const requestAxios = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export { requestAxios };
