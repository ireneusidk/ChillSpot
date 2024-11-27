const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//----------------------------------------------------------------------------------------------------------------------------------------------------
//Endpoits funcionales
router.get('/', async (req, res) => {
  try {
    const user = await User.findById(req.user.id);  
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(req.session.user); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los datos del usuario' });
  }
});

//registro
router.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({ username: req.body.username, password: hashedPassword });
    await user.save();
    res.status(201).send('Usuario registrado');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body; // Extrae datos
  try {
      const user = await User.findOne({ username }); // Busca al usuario
      console.log('Usuario encontrado:', user);
      const isMatch = await user.comparePassword(password);
        if (isMatch){
        req.session.user = { id: user._id, username: user.username }; 
          console.log('Sesión después del login:', req.session); // Depuración 
          return res.status(200).send('Sesión iniciada'); 
      }
      return res.status(401).send('Credenciales incorrectas'); 
  } catch (error) {
      return res.status(500).send(error.message); 
  }
});

// Logout
router.post('/logout', (req, res) => {
  req.session.destroy();
  res.status(200).send('Sesión cerrada');
});

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//no implementado
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { username } = req.body;  
    // Verifica si el 'id' coincide con el de la sesión
    if (req.session.user.id.toString() !== id) {
      return res.status(403).json({ message: 'No autorizado para modificar este usuario' });
    }
    // Actualiza el usuario en la base de datos
    const user = await User.findByIdAndUpdate(id, { username }, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({ message: 'Nombre actualizado', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
});

// no implementado
const authMiddleware = (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).send('No estás autenticado');
  }
  next();
};

// profile no implementado en la versión deployada
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.session.user.id);
    if (!user) return res.status(404).send('Usuario no encontrado');
    res.status(200).json({ username: user.username });
  } catch (error) {
    res.status(500).send(error.message);
  }
});


// profile no implementado en la versión deployada
router.put('/profile', authMiddleware, async (req, res) => {
  const { username, email } = req.body;
  try {
    const user = await User.findById(req.session.user.id);
    if (!user) return res.status(404).send('Usuario no encontrado');
    // Actualiza los datos
    if (username) user.username = username;
    await user.save();
    res.status(200).send('Perfil actualizado');
  } catch (error) {
    res.status(500).send(error.message);
  }
});
  
module.exports = router;
