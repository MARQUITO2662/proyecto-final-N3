// BarraBusqueda.jsx
import React from 'react';

const BarraBusqueda = ({ onBuscar }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const ubicacion = e.target.elements.ubicacion.value;
    onBuscar(ubicacion);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="ubicacion" placeholder="Ingrese una ubicación" />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default BarraBusqueda;
