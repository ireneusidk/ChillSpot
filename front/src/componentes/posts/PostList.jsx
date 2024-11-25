// importaciones
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Posts'; // Importa el componente Post

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('/api/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <Post 
          key={post._id} 
          title={post.title} 
          date={new Date(post.createdAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })} 
          content={post.content} 
          image={post.image} 
        />
      ))}
    </div>
  );
};

export default PostList;