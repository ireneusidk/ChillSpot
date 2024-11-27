const express = require('express');
const Post = require('../models/Post');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//Creamos una nueva publicacion
router.post('/', async (req, res) => {
  try {
    // Verificación de sesión: lanza un error si no hay un usuario autenticado
    console.log('Usuario en sesión:', req.session.user); 
    // * Corregir problema de captura de usuario para saber quien publicó dependiendo de la sesión iniciada * 
    const author = req.session.user?.username || 'Anonimo';
    const { title, content, image } = req.body;
    const post = new Post({
      author,
      title,
      content,
      image
    });

    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/// Obtener todas las publicaciones
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }); // Ordenar por  descendente
    res.status(200).json(posts); // Responder con los posts
  } catch (error) {
    res.status(500).send(error.message); // Manejo de errores
  }
});

// Eliminar publicacion
router.delete('/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).send('Publicación eliminada');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Dar me gusta
router.put('/:id/toggle-like', async (req, res) => {
  const userId = req.body.userId; 
  try {
    const post = await Post.findById(req.params.id);

    if (post.likedBy.includes(userId)) {
      // Si el usuario ya ha dió "Me gusta", se quita
      post.likes -= 1;
      post.likedBy = post.likedBy.filter(id => id !== userId);
    } else {
      // Si el usuario no dió "Me gusta", se agrega
      post.likes += 1;
      post.likedBy.push(userId);
    }

    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Actualizar publicacion
router.put('/:id', async (req, res) => {
  try {
    const { title } = req.body;
    const { content } = req.body; 
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true } // devuelve documento actualizado
    );
    if (!post) {
      return res.status(404).send('Publicación no encontrada');
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;