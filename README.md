ChillSpot es una página web estilo red social enfocada al arte y al gaming, donde compartiremos imágenes en conjunto con algo que querramos escribir acerca de nuestra “obra de arte” o alguna jugada que deseamos compartir con la comunidad.
Detalles técnicos:
Esta página está diseñada con el stack “MERN” Mongodb, Express, React, Node, y para el login hacemos uso de CORS.
Tecnologías utilizadas:
Front: React, React Router, CSS.
Back: Node.js, Express.
BD: MongoDb, Mongoose.
Autenticación: CORS – Express-sessions.
Estructura:
Frontend: Codigo en la carpeta front/
Backend: Codigo en la carpeta back/

Instalación:
Para el back:
Para instalar las dependencias del back vamos a la carpeta “back” cd ./back e instalamos con npm install. En el archivo .env dentro del back tenemos las siguientes variables: 
MONGODB_URI = mongodb+srv://nombreusuario:contraseña@test.babiouw.mongodb.net/auth?retryWrites=true&w=majority
PORT = 8080
SESSION_SECRET= f7e6c3b95af23464a3c4e6c67b6d92757b1b7c187df0c7e6e0cb7c90e4cb5ed3
CLIENT_ORIGIN=https://mi-app-en-render.com (donde va a estar el front desplegado en render)

Para el front: 
cd ./front
npm install
npm start

Funcionalidades: 
*Lista de post: (Inicio) veremos todos los post creados por nosotros.
*Editar un post: podremos editar el titulo y el texto del cuerpo del post.
*Crear un post: (Publicar) creamos un post con titulo, imagen (url) y lo que querramos comentar acerca de nuestra imagen.
*Eliminar un post: (botón eliminar) tenemos la opción de eliminar completamente nuestro post.
*registrarse: nos registramos en la base de datos con nuestro nombre y contraseña.
*loguearse: ingresamos a [sección protegida] si nos logueamos y además solo podremos postear si estamos logueados.
*cerrar sesión: nos deslogueamos de la página, aun podremos ver lo que haya en Inicio y jugar en ChillCorner.

EndPoints:
POSTS:
GET /api/posts
Obtiene todas las publicación en forma descendente según su fecha de creación.
POST /api/posts
Crea una nueva publicación que guarda en la base de datos
DELETE /api/posts/:id 
Elimina una publicación por su id
PUT /api/posts/:id
Actualiza una publicación mediante su id 
USERS:
POST /api/user/login 
Inicia sesión con un usuario
POST /api/user/register
Registra un nuevo usuario
POST /api/user/logout
Cierra la sesión del usuario autenticado
Otras configuraciones:
Cors: añadimos el origin para que acepte nuestro front ubicado en render
Sesiones: utilizamos cookies para el inicio de sesión 

