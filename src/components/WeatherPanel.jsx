import React from 'react';
import useWeather from '../hooks/useWeather';
import BotonUbicacion from './BotonUbicacion';

const WeatherPanel = () => {
  const { weatherData, city, getLocation, kelvinToCelsius } = useWeather();

  return (
    <div className="relative w-[459px] h-[1023px] bg-customDark">
      {/* Otras partes del contenido */}
      
      <div className="absolute top-[768px] left-1/2 transform -translate-x-1/2 text-xl font-semibold text-center bg-[#A09FB1]">
        {weatherData && weatherData.weather[0].description}
      </div>
    </div>
  );
};

export default WeatherPanel;
