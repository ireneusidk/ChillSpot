import React, { useEffect, useState } from 'react';
import "../menu/Inicio.css";
import axios from "axios";

function Inicio() {
  const [publicaciones, setPublicaciones] = useState([]);
  const [editando, setEditando] = useState(null); 
  const [nuevoTitulo, setNuevoTitulo] = useState(''); 
  const [nuevoContent, setNuevoContent] = useState('');
  const [nuevoImagen, setNuevoImagen] = useState('');
  const userId = 'usuarioDemo123';

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch('https://chillspot-84lu.onrender.com/api/posts');
        const data = await response.json();
        console.log('Datos obtenidos:', data);
        setPublicaciones(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    obtenerDatos();
  }, []); 

  const handleUpdate = async (id) => {
    try {
      const updatedPost = { title: nuevoTitulo, content: nuevoContent, image: nuevoImagen };
      const response = await axios.put(`https://chillspot-84lu.onrender.com/api/posts/${id}`, updatedPost);
      setPublicaciones(
        publicaciones.map((post) =>
          post._id === id ? { ...post, title: nuevoTitulo, content: nuevoContent, image: nuevoImagen } : post
        )
      );
      setEditando(null);
      setNuevoTitulo('');
      setNuevoContent('');
      setNuevoImagen('');
    } catch (error) {
      console.error('Error al actualizar la publicación:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://chillspot-84lu.onrender.com/api/posts/${id}`);
      setPublicaciones(publicaciones.filter((publicacion) => publicacion._id !== id));
    } catch (error) {
      console.error('Error al eliminar la publicación:', error);
    }
  };

  const handleToggleLike = async (id) => {
    try {
      const response = await axios.put(`https://chillspot-84lu.onrender.com/api/posts/${id}/toggle-like`, { userId });
      setPublicaciones(publicaciones.map((post) => (post._id === id ? response.data : post)));
    } catch (error) {
      console.error('Error al alternar "Me gusta" en la publicación:', error);
    }
  };

  return (
    <div className="inicio">
      {publicaciones.length > 0 ? (
        publicaciones.map((publicacion, index) => (
          <div className="posts-container" key={index}>
            {editando === publicacion._id ? (
              <div className="editar-container">
                <label htmlFor="titulo">Titulo: </label>
                <input
                  type="text"
                  value={nuevoTitulo}
                  onChange={(e) => setNuevoTitulo(e.target.value)}
                  placeholder="Nuevo título"
                />
                <label htmlFor="Texto">Escribe tu texto: </label>
                <input
                  type="text"
                  value={nuevoContent}
                  onChange={(e) => setNuevoContent(e.target.value)}
                  placeholder="Nuevo contenido"
                />
                <label htmlFor="Texto">URL de tu imagen:</label>
                 <input className='input'
                  type="text"
                  value={nuevoImagen}
                  onChange={(e) => setNuevoImagen(e.target.value)}
                  placeholder="Nueva URL de la imagen"
                />
                <button onClick={() => handleUpdate(publicacion._id)}>Guardar</button>
                <button onClick={() => setEditando(null)}>Cancelar</button>
              </div>
            ) : (
              <><h1 className="p">{publicacion.author}</h1>
                <h2 className="titulo">{publicacion.title}</h2>
                <p className="p">{publicacion.content}</p>
                <p className="img">
                  {publicacion.image && (
                    <img src={publicacion.image} alt="Imagen de la publicación" width={"300px"} />
                  )}
                </p>
                <div className="boton-footer">
                  <button className="btn-like" onClick={() => handleToggleLike(publicacion._id)}>
                    Me gusta ({publicacion.likes})
                  </button>
                  {/* <button className="btn-comment">Comentar</button> */}
                  <button className="btn-delete" onClick={() => { setEditando(publicacion._id); setNuevoTitulo(publicacion.title); setNuevoContent(publicacion.content); setNuevoImagen(publicacion.image || '');}}>
                    Editar
                  </button>
                  <button
                    type="button"
                    className="btn-delete"
                    onClick={() => handleDelete(publicacion._id)}
                  >
                    Eliminar
                  </button>
                  
                </div>
              </>
            )}
          </div>
        ))
      ) : (
        <p>No hay publicaciones disponibles.</p>
      )}
    </div>
  );
}

export default Inicio;

