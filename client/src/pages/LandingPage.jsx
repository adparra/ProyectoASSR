// LandingPage.js
import React from 'react';
import '../css/LandingPage.css'; // Import the CSS file
import foto from '../pictures/smarthome.png'

const LandingPage = () => {
  return (
    <div>
      <div className="body">
        <h1 className="title">Smart Home ASSR</h1>
        <p>Bienvenido a Smart Home, su asistente del hogar virtual.<br/> Mediante esta aplicación web usted podrá
            monitorear y controlar las funciones dentro de su hogar.<br/> No espere más, ¡únase
            hoy!
        </p>
        <img src={foto} alt="mecanico" width="400" height="400" className="picture"></img>
      </div>
    </div>
  );
};

export default LandingPage;
