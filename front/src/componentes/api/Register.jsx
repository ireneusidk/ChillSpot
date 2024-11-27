import React, { useState } from 'react';
import api from './api';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Mueve esto dentro del componente

  const loginStyle = {
    backgroundImage: 'url("/000000.png")',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar la solicitud al backend para registrar al usuario
      await api.post('/users/register', { username, password });
      alert('Usuario registrado con éxito');
      navigate('/login'); // Redirige al login después del registro exitoso
    } catch (error) {
      alert('Error al registrar: ' + error.response.data);
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
        <h2 className="login-title">Chill Spot</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="register">Registro</h2>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="login-input"
          />
          <input
            className="pass login-input"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="Button1 login-button">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
