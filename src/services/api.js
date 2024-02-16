import axios from "axios";

const api = axios.get("http://127.0.0.1:8000/services").then((response) => {
  return response;
});

export default api;