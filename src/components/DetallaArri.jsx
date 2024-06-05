import React, { useState } from 'react';
import img01d from '/src/weather-app-master/01d.png';
import img03d from '/src/weather-app-master/03d.png';
import img09d from '/src/weather-app-master/09d.png';
import img10d from '/src/weather-app-master/10d.png';
import cloudBackground from '/src/weather-app-master/Cloud-background.png';

const DetallaArri = () => {
  const [unit, setUnit] = useState('C'); // Estado para manejar unidades

  const weatherIcons = {
    'Tomorrow': img01d,
    'Sun, 7 Jun': img03d,
    'Mon, 8 Jun': img09d,
    'Tue, 9 Jun': img10d,
    'Wed, 10 Jun': cloudBackground,
  };

  const convertTemperature = (temp) => {
    return unit === 'C' ? temp : (temp * 9/5) + 32;
  };

  return (
    <div className="flex-grow flex items-center justify-center mb-40">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-4xl mx-auto relative" style={{ top: '50px' }}>
        {['Tomorrow', 'Sun, 7 Jun', 'Mon, 8 Jun', 'Tue, 9 Jun', 'Wed, 10 Jun'].map((day, index) => (
          <div key={index} className="relative bg-customSecondaryDark p-3 rounded-lg text-center" style={{ width: '128px', height: '176px', background: '#1E213A' }}>
            <p className="text-xs mt-0.5 mb-1">{day}</p>
            <img src={weatherIcons[day]} alt="weather icon" className="mx-auto mb-2 w-10 h-10" />
            <p className="text-xs mt-0.5"><span className="font-semibold">{convertTemperature(16)}°{unit}</span> {convertTemperature(11)}°{unit}</p>
          </div>
        ))}
        <button 
          className="absolute bg-white text-black p-2 rounded-full" 
          style={{ width: '40px', height: '40px', top: '-80px', right: '20px', borderRadius: '50%', opacity: '1' }}
          onClick={() => setUnit('C')}
        >
          °C
        </button>
        <button 
          className="absolute bg-gray-700 text-white p-2 rounded-full" 
          style={{ width: '40px', height: '40px', top: '-80px', right: '80px', borderRadius: '50%', opacity: '1' }}
          onClick={() => setUnit('F')}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default DetallaArri;
