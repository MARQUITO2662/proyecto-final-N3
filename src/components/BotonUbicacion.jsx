// BotonUbicacion.jsx
import React from 'react';

const BotonUbicacion = ({ onClick }) => {
  return (
    <button className="boton-ubicacion" onClick={onClick}>
      Obtener Ubicación Actual
    </button>
  );
};

export default BotonUbicacion;
