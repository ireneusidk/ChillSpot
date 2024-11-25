import './protegida.css';
import React from "react";
import '../../../src/index.css'
import kuromiImage from "/kuromi.jpg"; // Ajusta la ruta si está en otra carpeta

const Protegida = () => {
    return(
      // <div>
      //   <h1 className='h1'> Post Privados </h1>
      //   <p> Bienvenidos a nuestra sección exclusiva</p>
      //   <p> Este contenido es accesible solo para usuarios verificados </p>
      // </div>
      <div className="perfil-container">
      <h1>Perfil de Ireneus</h1>
      <div className="perfil-info">
      <img src={kuromiImage} className='photo' alt="Kuromi" />
          <p className='perfil-info'>Email: xxxxxx@live.com</p>
          <p className='perfil-info'>Teléfono:123456789 </p>
      </div>
  </div>
    )
  }
  
  export default Protegida; 