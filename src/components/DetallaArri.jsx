import React, { useState } from 'react';
import img01d from '/src/weather-app-master/01d.png';
import img03d from '/src/weather-app-master/03d.png';
import img09d from '/src/weather-app-master/09d.png';
import img10d from '/src/weather-app-master/10d.png';

const DetallaArri = ({ forecastData, kelvinToCelsius }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const weatherIcons = {
    '01d': img01d,
    '03d': img03d,
    '09d': img09d,
    '10d': img10d,
  };

  const getDayOfWeek = (date) => {
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const convertTemperature = (temp) => {
    return isCelsius ? kelvinToCelsius(temp) : Math.round((kelvinToCelsius(temp) * 9/5) + 32);
  };

  if (!forecastData || !forecastData.list) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-grow flex items-center justify-center mb-40">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-4xl mx-auto relative" style={{ top: '50px' }}>
        {forecastData.list.slice(0, 5).map((forecast, index) => (
          <div key={index} className="relative bg-customSecondaryDark p-3 rounded-lg text-center" style={{ width: '128px', height: '176px', background: '#1E213A' }}>
            <p className="text-xs mt-0.5 mb-1">{index === 0 ? 'Tomorrow' : getDayOfWeek(forecast.dt_txt)}</p>
            <img src={weatherIcons[forecast.weather[0].icon]} alt="weather icon" className="mx-auto mb-2 w-10 h-10" />
            <p className="text-xs mt-0.5"><span className="font-semibold">{convertTemperature(forecast.main.temp_max)}°{isCelsius ? 'C' : 'F'}</span> {convertTemperature(forecast.main.temp_min)}°{isCelsius ? 'C' : 'F'}</p>
          </div>
        ))}
        <button className={`absolute bg-white text-black p-2 rounded-full ${isCelsius ? 'bg-gray-700' : 'bg-white'}`} style={{ width: '40px', height: '40px', top: '-80px', right: '20px', borderRadius: '50%' }} onClick={() => setIsCelsius(true)}>°C</button>
        <button className={`absolute bg-gray-700 text-white p-2 rounded-full ${isCelsius ? 'bg-white' : 'bg-gray-700'}`} style={{ width: '40px', height: '40px', top: '-80px', right: '80px', borderRadius: '50%' }} onClick={() => setIsCelsius(false)}>°F</button>
      </div>
    </div>
  );
};

export default DetallaArri;
