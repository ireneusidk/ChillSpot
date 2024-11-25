
import { useNavigate } from 'react-router-dom'; 
import api from './api';
import { useAuth } from './AuthContext'; 
import React, { useState } from 'react';
import './Login.css';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Hook para manejar el login
  const navigate = useNavigate(); // Hook para redirigir después del login

  // Estilo de fondo para la página de login
  const loginStyle = {
    backgroundImage: 'url("/000000.png")'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realizar la solicitud a la API para iniciar sesión
      await api.post('/users/login', { username, password });
      
      login(); // Llama a `login` desde el contexto para actualizar el estado de autenticación
      navigate('/profile'); // Redirige al usuario a la página protegida (o la que desees)
    } catch (error) {
      // Si hay un error, muestra una alerta con el mensaje del error
      alert('Error al ingresar: ' + (error.response?.data || error.message));
    }
  };

  return (
    <div style={loginStyle}>
      <div className="login-container">
        <img 
          src="/pruea_1.png" 
          alt="Personaje pequeño" 
          className="personaje-chiquito rgb-contorno"
        />
        <p className="p personaje1-chiquito rgb-contorno">
          Un sorbo a la vez, todo mejora.
        </p>
        <h2 className="login-title">Chill Spot</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre de Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
