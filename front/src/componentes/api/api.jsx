import axios from "axios";

const api = axios.create({
baseURL: 'https://chillspot-84lu.onrender.com/api', // En desarrollo
  withCredentials: true
});
const getUserProfile = async () => {
  try {
    const response = await api.get('/users/protegida');
    console.log('Perfil del usuario:', response.data);
  } catch (error) {
    console.error('Error al obtener el perfil:', error);
  }
};
export default api;
