import axios from "axios";

const api = axios.create({
  baseURL: "https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
