// import React, { useState } from 'react';
// import './Login.css'
import { useNavigate } from 'react-router-dom'; 
import api from './api';
import { useAuth } from './AuthContext'; 


// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await api.post('/users/login', { 
//         username, 
//         password 
//       });
//       login(); // Llama a `login()` después de un inicio de sesión exitoso
//       navigate('/protegida');
//     } catch (error) {
//       alert('Error al ingresar: ' + error.response?.data || error.message);
//     }
//   };

//   return (
    
//     <form onSubmit={handleSubmit}>
//       <div className='border'>
//       <h2>Iniciar sesión</h2>
//       <input
//         type="text"
//         placeholder="Nombre de usuario"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         required
//       />
//       <input className='pass'
//         type="password"
//         placeholder="Contraseña"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit" className='Button1'>Iniciar sesión</button>
//       </div>
//     </form>
    
//   );
// };

// export default Login;
import React, { useState } from 'react';
import './Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const loginStyle = {
//     backgroundImage: 'url("/000000.png")'
//     }
// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
  // const { login } = useAuth();
  // const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post('/users/login', { username, password });
//       login(); // Llama a `login()` después de un inicio de sesión exitoso
//       navigate('/protegida');
//     } catch (error) {
//       alert('Error al ingresar: ' + error.response?.data || error.message);
//     }
//   };

//   return (
//     <div style={loginStyle}>
//     <div className="login-container">
//     <img 
//   src="/pruea_1.png" 
//   alt="Personaje pequeño" 
//   className="personaje-chiquito rgb-contorno"
// />
// <p className="p personaje1-chiquito rgb-contorno"> Un sorbo a la vez, todo mejora.</p>
//       <h2 className="login-title">Chill Spot</h2>
//       <form className="login-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Nombre de Usuario"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="login-input"
//         />
//         <input
//           type="password"
//           placeholder="Contraseña"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="login-input"
//         />
//         <button type="submit" className="login-button">Login</button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default Login;



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Hook para manejar el login
  const navigate = useNavigate(); // Hook para redirigir después del login

  // Estilo de fondo para la página de login
  const loginStyle = {
    backgroundImage: 'url("/000000.png")'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realizar la solicitud a la API para iniciar sesión
      await api.post('/users/login', { username, password });
      
      login(); // Llama a `login` desde el contexto para actualizar el estado de autenticación
      navigate('/profile'); // Redirige al usuario a la página protegida (o la que desees)
    } catch (error) {
      // Si hay un error, muestra una alerta con el mensaje del error
      alert('Error al ingresar: ' + (error.response?.data || error.message));
    }
  };

  return (
    <div style={loginStyle}>
      <div className="login-container">
        <img 
          src="/pruea_1.png" 
          alt="Personaje pequeño" 
          className="personaje-chiquito rgb-contorno"
        />
        <p className="p personaje1-chiquito rgb-contorno">
          Un sorbo a la vez, todo mejora.
        </p>
        <h2 className="login-title">Chill Spot</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre de Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;