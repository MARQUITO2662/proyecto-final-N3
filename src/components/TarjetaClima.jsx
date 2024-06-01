// src/components/TarjetaClima.jsx
import React from 'react';

const TarjetaClima = ({ clima }) => {
  return (
    <div className="tarjeta-clima">
      <h2>{clima.ciudad}</h2>
      <p>Fecha: {clima.fecha}</p>
      <p>Temperatura: {clima.temperaturaC} °C / {clima.temperaturaF} °F</p>
      <p>Descripción: {clima.descripcion}</p>
      {/* Agrega más detalles del clima si es necesario */}
    </div>
  );
};

export default TarjetaClima;
