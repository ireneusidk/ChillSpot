import axios from "axios";

const api = axios.create({
  baseURL: 'http://192.168.0.138:8080/api',
  withCredentials: true
});
const getUserProfile = async () => {
  try {
    const response = await api.get('/users/profile');
    console.log('Perfil del usuario:', response.data);
  } catch (error) {
    console.error('Error al obtener el perfil:', error);
  }
};
export default api;