import React from "react";
import "./About.css";

const About = () => {
  const loginStyle = {
    backgroundImage: 'url("/pruea_1.png")',
  };

  return (
    <div style={loginStyle} className="about-section">
      <div className="content-container">
        <div className="text-content">
          <h1 className="encabezado">Sobre Nosotros</h1>
          <div className="recuadro">
            <p className="text">
              "Chill Spot es más que una simple página web; es un refugio para
              todos aquellos que aman los videojuegos y el arte. Aquí encontrarás
              un espacio seguro para compartir tus proyectos, conectar  con otros
              creadores y descubrir nuevas inspiraciones. ¿Eres un artista digital
              que busca mostrar tus últimas obras? ¿Un gamer que quiere compartir
              sus mejores jugadas? ¡Este es tu lugar! En Chill Spot, celebramos la
              diversidad y creemos que la creatividad no tiene límites."
            </p>
          </div>
        </div>
        {/* <img
          src="/pruea_1.png"
          alt="Personaje pequeño"
          className="personaje-chiquito rgb-contorno"
        /> */}
      </div>
    </div>
  );
};

export default About;