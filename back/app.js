const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const session = require('express-session');
require('dotenv').config(); 
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configuración de la sesión
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: process.env.NODE_ENV === 'production', 
    // secure: true,
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', 
    // httpOnly: true
  }
}));
const corsOptions = {
  origin: 'https://chillspot-front.onrender.com', // Permitir solicitudes solo desde el front de render
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Metodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
  credentials: true, // Permitir el envío de cookies 
};
app.use(cors(corsOptions));

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT,'0.0.0.0', () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
