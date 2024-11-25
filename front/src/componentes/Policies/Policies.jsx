import React from "react";
// import "./About.css";
import "./Policies.css"
const PrivacyPolicy = () => {
    return (
      <div className="privacy-policy-container">
        <h1 className="privacy-title">Políticas de Privacidad</h1>
        
        <section className="privacy-section">
          <h2 className="section-title">1. Información que recopilamos</h2>
          <p className="section-text">
            Podemos recopilar información personal de las siguientes maneras:
          </p>
          <ul className="privacy-list">
            <li>
              <strong>Información que proporcionas directamente:</strong> Como tu
              nombre, correo electrónico y cualquier otra información que nos
              proporciones al registrarte o interactuar en nuestra página.
            </li>
            <li>
              <strong>Información recopilada automáticamente:</strong> Datos como
              tu dirección IP, tipo de dispositivo, navegador utilizado y páginas
              visitadas.
            </li>
          </ul>
        </section>
        
        <section className="privacy-section">
          <h2 className="section-title">2. Uso de la información</h2>
          <p className="section-text">
            Utilizamos la información recopilada para:
          </p>
          <ul className="privacy-list">
            <li>Personalizar tu experiencia en nuestro sitio.</li>
            <li>Mejorar nuestros servicios y funcionalidades.</li>
            <li>
              Comunicarnos contigo sobre actualizaciones, promociones o soporte
              técnico.
            </li>
          </ul>
        </section>
        
        <section className="privacy-section">
          <h2 className="section-title">3. Protección de tus datos</h2>
          <p className="section-text">
            Nos comprometemos a proteger tu información mediante medidas de
            seguridad técnicas y organizativas. Sin embargo, no podemos garantizar
            la seguridad completa de los datos debido a los riesgos inherentes de
            internet.
          </p>
        </section>
        
        <section className="privacy-section">
          <h2 className="section-title">4. Contacto</h2>
          <p className="section-text">
            Si tienes preguntas o inquietudes sobre nuestra política de
            privacidad, puedes contactarnos en:
          </p>
          <p className="contact-info">📧 contacto@chillspot.com</p>
        </section>
      </div>
    );
  };

export default PrivacyPolicy;