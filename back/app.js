const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
// const mailRoutes = require('./mailRoutes');
// const nodemailer = require('./routes/nodemailer')
const nodemailer = require('nodemailer');
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
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', 
  }
}));
const corsOptions = {
  origin: 'https://chillspot-front.onrender.com', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Metodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
  credentials: true, // Permitir el envío de cookies 
};
app.use(cors(corsOptions));


// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'Ethereal',
  auth: {
    user: 'dominique.reichel65@ethereal.email', 
    pass: '26zYnZCzJTu1NexgWb',  
  },
});

// Ruta para enviar correos
app.post('/api/send-email', (req, res) => {
  const { from, to, subject, text } = req.body;

  const mailOptions = {
    from,        
    to,          
    subject,    
    text,        
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);  // Imprimir detalles del error
      return res.status(500).send('Error al enviar el correo: ' + error.message);  // Proveer mensaje detallado
    }
    res.status(200).send('Correo enviado: ' + info.response);
  });
});

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
// app.use('/api', nodemailer);
// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT,'0.0.0.0', () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
