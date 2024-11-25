import React, { useState, useEffect } from "react";
import api from "../api/api";// Axios configurado

const Perfil = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    telefono: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cargar datos del usuario al montar el componente
    const fetchUserData = async () => {
      try {
        const response = await api.get("/users/me"); // Endpoint para obtener datos del usuario autenticado
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar datos del usuario:", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const response = await api.put("/users/me", userData); // Endpoint para actualizar usuario
      setUserData(response.data);
      setIsEditing(false);
      alert("Datos actualizados correctamente.");
    } catch (error) {
      console.error("Error al actualizar datos del usuario:", error);
      alert("Error al actualizar los datos.");
    }
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="perfil-container">
      <h1>Perfil de {userData.username}</h1>
      <div className="perfil-info">
        <label>
          <strong>Email:</strong>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          ) : (
            <p>{userData.email}</p>
          )}
        </label>
        <label>
          <strong>Teléfono:</strong>
          {isEditing ? (
            <input
              type="text"
              name="telefono"
              value={userData.telefono}
              onChange={handleInputChange}
            />
          ) : (
            <p>{userData.telefono}</p>
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
  );
};

export default Perfil;