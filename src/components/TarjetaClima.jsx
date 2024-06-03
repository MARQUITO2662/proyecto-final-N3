// src/components/TarjetaClima.jsx
import React from 'react';

const TarjetaClima = ({ clima }) => {
  return (
    <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center text-white">
      <h2 className="text-xl font-bold">{clima.ciudad}</h2>
      <p className="text-3xl font-semibold">{clima.temperaturaC}°C / {clima.temperaturaF}°F</p>
      <p className="text-lg capitalize">{clima.descripcion}</p>
      <p className="text-sm">{clima.fecha}</p>
      <div className="flex justify-center items-center mt-2">
        <img src={`http://openweathermap.org/img/wn/${clima.icono}.png`} alt="Weather icon" />
        <p className="ml-2">{clima.ciudad}</p>
      </div>
    </div>
  );
};

export default TarjetaClima;
