import axios from "axios";

const api = axios.create({
  baseURL: "https://artistic-intuition-production-ea49.up.railway.app/api",
});

export default api;