import React, { useState } from 'react';
import axios from 'axios';
import './Contacto.css'
const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mailData = {
      from:email,
      to: 'dominique.reichel65@ethereal.email',
      subject: subject,
      text: message,
    };

    try {
      const response = await axios.post('https://chillspot-84lu.onrender.com/api/send-email', mailData);
      console.log('Correo enviado:', response.data);
      window.location.reload();
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    }
  };

  return (
    <div>
        <h1 className='mail'>Envianos tu mail</h1>
    <form className='aaaa' onSubmit={handleSubmit}>
    <div className="form-group1">
    <label htmlFor="from" className="form-label1">From</label>
      <input
        type="email"
        id="from"
        name="from"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="form-input1"
      />
      </div>

      <div className="form-group1">
      <label htmlFor="subject" className="form-label1">Subject</label>
      <input
        type="text"
        placeholder="Asunto"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
        className="form-input1"
      />
      </div>
      <div className="form-group1">
      <label htmlFor="text" className="form-label1">Message</label>
      <textarea
        placeholder="Mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="form-input1"
      />
      </div>
      <button type="submit" className="form-button1" >Enviar</button>
    </form>
    </div>
  );
};

export default ContactForm;
