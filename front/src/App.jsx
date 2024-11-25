import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import Footer from './componentes/footer/Footer';
import Header from './componentes/header/Header';
import Menu from './componentes/menu/Menu';
import Register from './componentes/api/Register';
import Login from './componentes/api/Login';
import { AuthProvider } from './componentes/api/AuthContext';
import Protegida from './componentes/protegida/Protegida'
import ProtectedRoute from './componentes/api/ProtectedRoutes';
import Inicio from './componentes/menu/Inicio';
import Post from './componentes/posts/Posts';
import Game from './componentes/chillcorner/game';
import PostForm from './componentes/posts/PostForm';

// import Navbar from './componentes/navbar/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './componentes/footer/Footer.css'
import SomaFMPlayer from './componentes/musicplayer/SomaFMPlayer';
import About from './componentes/About/About';
import Policies from './componentes/Policies/Policies';
import Perfil from './componentes/perfil/Perfil';
import Profile from './componentes/Profile/Profile';
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Control para ocultar layout en las rutas de login y registro
  const hideLayout = location.pathname === '/login' || location.pathname === '/register';

  return (
    
    <div className="root">
    <div className="container">
      <div className="background-shapes">
        <div className="shape square"></div>
        <div className="shape square"></div>
        <div className="shape triangle"></div>
        <div className="shape triangle"></div>
        <div className="shape circle"></div>
        <div className="shape circle"></div>
      </div>
      {!hideLayout && <Header />}
      {!hideLayout && <Menu />}
      <SomaFMPlayer></SomaFMPlayer>
      <main>
        
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/form" element={<ProtectedRoute element={<PostForm />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/protegida" element={<ProtectedRoute element={<Protegida/>} />} />
          <Route path="/chillcorner" element={<Game />} />
          <Route path="/about" element={<About />} />
          <Route path="/policies" element={<Policies />} />
          {/* <Route path="/me" element={<Perfil />} /> */}
          {/* <Route path="/login"></Route> */}
      
        </Routes>
        
      </main>
      {!hideLayout && <Footer />}
    </div>
    </div>
  );
}

export default App;
