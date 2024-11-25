import React, { useState } from 'react';
import axios from 'axios';
import "./PostForm.css"
const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/posts', { title, content, image });
    setTitle('');
    setContent('');
    setImage('');
  };
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className='h1'>Crea tu publicacion</h1>
      <input className='input'
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Título de la publicación" 
      />
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Escribe una publicación..." 
      />
      <input className='input'
        type="text" 
        value={image} 
        onChange={(e) => setImage(e.target.value)} 
        placeholder="URL de la imagen" 
      />
      <button type="submit">Publicar</button>
    </form>
  );
};
export default PostForm;