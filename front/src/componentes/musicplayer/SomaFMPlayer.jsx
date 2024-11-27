import React from 'react';
import "./SomaFm.css";
function SomaFMPlayer() {
  return (
    <div className='aa'>
      <p className='h1'>Escuchar SomaFM</p>
      <audio controls autoPlay loop>
        <source src="https://ice2.somafm.com/defcon-128-mp3" type="audio/mp3" muted />
        Tu navegador no soporta la etiqueta de audio.
      </audio>
    </div>
  );
}

export default SomaFMPlayer;