import React from 'react';
import './Post.css';

const Post = ({ title, date, content, image }) => {
  return (
    <div className="post">
      <div className="post-header">
        <h2 className="post-title">{title}</h2>
        <span className="post-date">{date}</span>
      </div>
      <div className="post-content">
        <p>{content}</p>
        {image ? <img src={image} alt="Imagen de la publicación" className="post-image" /> : <img src="ruta/de/imagen/predeterminada.jpg" alt="Imagen predeterminada" className="post-image" />}
      </div>
      <div className="post-footer">
        <button className="btn-like">Me gusta</button>
        <button className="btn-comment">Comentar</button>
      </div>
    </div>
  );
};

export default Post;