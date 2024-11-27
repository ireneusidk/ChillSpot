import axios from "axios";

const api = axios.create({
baseURL: 'https://chillspot-84lu.onrender.com/api', // En desarrollo
  withCredentials: true
});

export default api;
