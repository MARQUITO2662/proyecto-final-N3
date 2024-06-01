// src/components/Weather.jsx
import React from 'react';
import useWeather from '../hooks/useWeather';
import BarraBusqueda from './BarraBusqueda';
import BotonUbicacion from './BotonUbicacion';
import TarjetaClima from './TarjetaClima';

const Weather = () => {
  const { weatherData, city, getLocation, kelvinToCelsius, kelvinToFahrenheit } = useWeather();

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold underline bg-cyan-600">
        Weather App
      </h1>
      <div className="flex justify-between">
        <BarraBusqueda onBuscar={(ubicacion) => console.log('Buscar clima en', ubicacion)} />
        <BotonUbicacion onClick={getLocation} />
      </div>
      {city && <h2 className="text-2xl mt-4">Weather in {city}</h2>}
      <div className="grid grid-cols-1 gap-4 mt-4">
        {weatherData.list.map((item) => (
          <TarjetaClima
            key={item.dt}
            clima={{
              ciudad: city,
              temperaturaC: kelvinToCelsius(item.main.temp),
              temperaturaF: kelvinToFahrenheit(item.main.temp),
              descripcion: item.weather[0].description,
              fecha: new Date(item.dt * 1000).toLocaleString() // Formatear la fecha
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Weather;
