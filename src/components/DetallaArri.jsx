import React, { useContext, useState } from 'react';
import { WeatherContext } from '../hooks/useConnection';

const DetallaArri = () => {
  const { weatherData, loading, error } = useContext(WeatherContext);
  const [unit, setUnit] = useState('C'); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!weatherData || !weatherData.list) return <div>No weather data available</div>;

  // Para obtener pronóstico diario
  const dailyForecasts = weatherData.list.filter(forecast => forecast.dt_txt.includes("12:00:00"));

  const convertTemperature = (temp) => {
    return unit === 'C' ? Math.round(temp - 273.15) : Math.round((temp - 273.15) * 9/5 + 32);
  };

  return (
    <div className="relative max-w-4xl mx-auto p-4">
      <div className="absolute top-4 right-0 flex space-x-2 z-10" style={{ right: '-5px' }}>
        <button
          className={`p-2 rounded-full ${unit === 'C' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          style={{ width: '40px', height: '40px' }}
          onClick={() => setUnit('C')}
        >
          °C
        </button>
        <button
          className={`p-2 rounded-full ${unit === 'F' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          style={{ width: '40px', height: '40px' }}
          onClick={() => setUnit('F')}
        >
          °F
        </button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {dailyForecasts.slice(0, 5).map((forecast, index) => (
          <div key={index} className="bg-customSecondaryDark p-3 rounded-lg text-center w-full h-44">
            <p className="text-xs mb-1 py-4">
              {new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            </p>
            <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="weather icon" className="mx-auto w-10 h-10" />
            <p className="text-xs py-2">
              <span className="font-semibold">{convertTemperature(forecast.main.temp_max)}°{unit} Mx -</span> {convertTemperature(forecast.main.temp_min)}°{unit} Mn
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetallaArri;
