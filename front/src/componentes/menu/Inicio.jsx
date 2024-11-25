import React, { useEffect, useState } from 'react';
import "../menu/Inicio.css";
import axios from "axios";

function Inicio() {
  const [publicaciones, setPublicaciones] = useState([]);
  const [editando, setEditando] = useState(null); // Controla qué publicación se está editando
  const [nuevoTitulo, setNuevoTitulo] = useState(''); // Almacena el nuevo título durante la edición
  const [nuevoContent, setNuevoContent] = useState('');
  const userId = 'usuarioDemo123';

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/posts');
        const data = await response.json();
        console.log('Datos obtenidos:', data);
        setPublicaciones(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    obtenerDatos();
  }, []); // Solo se ejecuta una vez al montar el componente

  const handleUpdate = async (id) => {
    try {
      const updatedPost = { title: nuevoTitulo, content: nuevoContent };
      const response = await axios.put(`http://localhost:8080/api/posts/${id}`, updatedPost);
      setPublicaciones(
        publicaciones.map((post) =>
          post._id === id ? { ...post, title: nuevoTitulo, content: nuevoContent } : post
        )
      );
      setEditando(null);
      setNuevoTitulo('');
      setNuevoContent('');
    } catch (error) {
      console.error('Error al actualizar la publicación:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/posts/${id}`);
      setPublicaciones(publicaciones.filter((publicacion) => publicacion._id !== id));
    } catch (error) {
      console.error('Error al eliminar la publicación:', error);
    }
  };

  const handleToggleLike = async (id) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/posts/${id}/toggle-like`, { userId });
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
              <div>
                <input
                  type="text"
                  value={nuevoTitulo}
                  onChange={(e) => setNuevoTitulo(e.target.value)}
                  placeholder="Nuevo título"
                />
                <input
                  type="text"
                  value={nuevoContent}
                  onChange={(e) => setNuevoContent(e.target.value)}
                  placeholder="Nuevo contenido"
                />
                <button onClick={() => handleUpdate(publicacion._id)}>Guardar</button>
                <button onClick={() => setEditando(null)}>Cancelar</button>
              </div>
            ) : (
              <>
                <h2 className="titulo">{publicacion.title}</h2>
                <p className="p">{publicacion.author}</p>
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
                  <button
                    type="button"
                    className="btn-delete"
                    onClick={() => handleDelete(publicacion._id)}
                  >
                    Eliminar
                  </button>
                  <button className="btn-delete" onClick={() => { setEditando(publicacion._id); setNuevoTitulo(publicacion.title); setNuevoContent(publicacion.content); }}>
                    Editar
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