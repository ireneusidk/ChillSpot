import React, { useState, useEffect } from 'react';
import { useAuth } from '../api/AuthContext'; // Usamos el contexto de autenticación
import api from '../api/api'; // Asumo que 'api' es tu cliente configurado para hacer peticiones a tu backend
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState({
    username: "",
    id: null,  // Añadir id en userData para manejarlo adecuadamente
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth(); // Verificar si el usuario está autenticado

  // Si no está autenticado, mostramos un mensaje
  if (!isAuthenticated) {
    return <p>No tienes acceso. Inicia sesión primero.</p>;
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get('/users'); 
        setUserData({
          username: response.data.username || "",  
          id: response.data.id || null, 
        });
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar los datos del usuario:", error);
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, []);
  const handleInputChange = (e) => {
    // Función para actualizar el estado de los datos cuando se editan
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!userData.id) {
      console.error('ID de usuario no disponible');
      return;
    }
  
    try {
      const response = await axios.put(`http://192.168.0.138:8080/api/users/${userData.id}`, {
        username: userData.username,  // Actualiza solo el nombre de usuario
      });
      console.log('Datos actualizados:', response.data);
      setIsEditing(false);  // Cambia el estado a no editar después de guardar
    } catch (error) {
      console.error('Error al actualizar datos del usuario:', error);
    }
  };

  if (loading) {
    return <p>Cargando...</p>; // Mientras se cargan los datos
  }

  return (
    <div>
      <h1>Bienvenido a tu perfil</h1>
      <div className="perfil-container">
        <h2>Perfil de {userData.username}</h2>
        <div className="perfil-info">
          <label>
            <strong>Nombre:</strong>
            {isEditing ? (
              <input
                type="text"
                value={userData.username || ""} // Asegúrate de que nunca sea undefined
                name="username"
                onChange={handleInputChange}
              />
            ) : (
              <p>{userData.username}</p> // Mostrar el nombre si no está en modo edición
            )}
          </label>

          
          {isEditing ? (
            <button onClick={handleSave} className="save-button">
              Guardar
            </button>
          ) : (
            <button onClick={() => setIsEditing(true)} className="edit-button">
              Editar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
