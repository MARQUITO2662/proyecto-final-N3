// src/App.jsx
import React from 'react';
import './index.css';
import Weather from './components/Weather'; // Asegúrate de importar el componente Weather aquí

function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold underline bg-cyan-600">
        Hello, world from Tailwind!
      </h1>
      <Weather /> {/* Agrega el componente Weather aquí */}
    </div>
  );
}

export default App;
