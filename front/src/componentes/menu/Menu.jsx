import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../api/AuthContext";
import './Menu.css';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Menu = () => {
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); 
    alert('Sesión cerrada'); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`menu ${isMenuOpen ? 'active' : ''}`}>
      <div className="hamburger hamburguer1" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/form">Publicar</Link></li>
        <li><Link to="/profile">Sección protegida</Link></li>
        <li><Link to="/chillcorner">ChillCorner</Link></li>
        <li><button onClick={handleLogout} className="Button"><i className="fa fa-sign-out" aria-hidden="true"></i>Cerrar sesión</button></li>
        <li>
          <button onClick={toggleTheme} className="Boton">
            {darkMode ? (
              <i className="fas fa-sun"></i> // ícono de sol para modo claro
            ) : (
              <i className="fas fa-moon"></i> // ícono de luna para modo oscuro
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
