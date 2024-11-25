import React, { useState } from 'react';
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return(
    <header className="header">
      <h1>ChillSpot ☕</h1>
      <nav>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/login">Iniciar sesión</Link></li>
          <li><Link to="/register">Registro</Link></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;