// src/components/Weather.jsx
import React from 'react';
import useWeather from '../hooks/useWeather';
import BarraBusqueda from './BarraBusqueda';
import BotonUbicacion from './BotonUbicacion';
import TarjetaClima from './TarjetaClima';

const Weather = () => {
  const { weatherData, city, getLocation, kelvinToCelsius, kelvinToFahrenheit, searchLocation } = useWeather();

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <div className="flex justify-between w-full mb-4">
        <button className="text-white" onClick={() => searchLocation('')}>
          Search for places
        </button>
        <BotonUbicacion onClick={getLocation} />
      </div>
      {city && <h2 className="text-2xl mt-4 text-white">Weather in {city}</h2>}
      <div className="grid grid-cols-1 gap-4 mt-4">
        {weatherData.list.map((item) => (
          <TarjetaClima
            key={item.dt}
            clima={{
              ciudad: city,
              temperaturaC: kelvinToCelsius(item.main.temp),
              temperaturaF: kelvinToFahrenheit(item.main.temp),
              descripcion: item.weather[0].description,
              fecha: new Date(item.dt * 1000).toLocaleString(),
              icono: item.weather[0].icon,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Weather;
