// src/components/BarraBusqueda.jsx
import React from 'react';

const BarraBusqueda = ({ onBuscar }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const ubicacion = e.target.elements.ubicacion.value;
    onBuscar(ubicacion);
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        name="ubicacion"
        placeholder="Ingrese una ubicación"
        className="p-2 rounded-l-lg"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-lg">Buscar</button>
    </form>
  );
};

export default BarraBusqueda;