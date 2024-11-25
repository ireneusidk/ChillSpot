ChillSpot 🎮🎨

ChillSpot es una página web estilo red social enfocada en el arte y el gaming. Permite a los usuarios compartir imágenes acompañadas de comentarios sobre sus "obras de arte" o jugadas que quieran mostrar a la comunidad.
-------------------------------------------------------------------------------------------------------------------------
🚀 Detalles Técnicos

El proyecto utiliza el stack MERN:

Base de datos: MongoDB (Mongoose).
Backend: Node.js, Express.
Frontend: React, React Router, CSS.
Autenticación: CORS y Express Sessions.

------------------------------------------------------------------------------------------------------------------------

🛠 Estructura del Proyecto

Frontend: Código dentro de la carpeta front/.

Backend: Código dentro de la carpeta back/.

-------------------------------------------------------------------------------------------------------------------------

⚙️ Instalación

Backend:

Navega a la carpeta del backend:
bash
Copiar código
cd ./back  
Instala las dependencias:
bash
Copiar código
npm install  
Configura las variables de entorno creando un archivo .env con el siguiente contenido:
env
Copiar código
MONGODB_URI=mongodb+srv://nombreusuario:contraseña@test.babiouw.mongodb.net/auth?retryWrites=true&w=majority  
PORT=8080  
SESSION_SECRET=f7e6c3b95af23464a3c4e6c67b6d92757b1b7c187df0c7e6e0cb7c90e4cb5ed3  
CLIENT_ORIGIN=https://mi-app-en-render.com  

Frontend:

Navega a la carpeta del frontend:
bash
Copiar código
cd ./front  
Instala las dependencias:
bash
Copiar código
npm install  
Inicia la aplicación:
bash
Copiar código
npm start  

-------------------------------------------------------------------------------------------------------------------------

✨ Funcionalidades

Posteos:
Inicio: Visualiza todos los posts creados.
Editar: Modifica el título y el cuerpo del post.
Crear: Publica un nuevo post con título, imagen (URL) y descripción.
Eliminar: Borra un post completamente.
Autenticación:
Registro: Crea una cuenta con nombre y contraseña.
Inicio de sesión: Accede a secciones protegidas y publica contenido.
Cerrar sesión: Sal del sistema y navega en modo invitado.
Extras:
ChillCorner: Juega minijuegos mientras navegas por la página.

-------------------------------------------------------------------------------------------------------------------------

📡 Endpoints del Backend

Posts:

GET /api/posts
Obtiene todos los posts en orden descendente por fecha de creación.

POST /api/posts
Crea un nuevo post y lo guarda en la base de datos.

DELETE /api/posts/:id
Elimina un post identificado por su id.

PUT /api/posts/:id
Actualiza un post identificado por su id.

Usuarios:

POST /api/user/login
Inicia sesión con un usuario registrado.

POST /api/user/register
Registra un nuevo usuario en la base de datos.

POST /api/user/logout
Cierra sesión del usuario autenticado.

-------------------------------------------------------------------------------------------------------------------------

🔧 Configuraciones Adicionales

CORS: Configura el origin para aceptar peticiones del frontend desplegado en Render.
Sesiones: Utiliza cookies para gestionar el inicio de sesión.

-------------------------------------------------------------------------------------------------------------------------
Gracias por leer 🌸
