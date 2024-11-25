import './Footer.css';

function Footer() {
  return(
    <footer className="footer">
    <p>Derechos de autor © 2024 ChillSpot</p>
    <nav className="footer-links">
      <a href="/">Inicio</a>
      <a href="/about">Acerca de</a>
      <a href="#contact">Contacto</a>
      <a href="/policies">Políticas de Privacidad</a>
    </nav>
  </footer>
  )
}

export default Footer;