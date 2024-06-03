import React from 'react';

const DetallaArri = () => {
  const weatherIcons = {
    'Tomorrow': '01d.png', // Suponiendo que 'Tomorrow' corresponde al icono '01d.png'
    'Sun, 7 Jun': '03d.png',
    'Mon, 8 Jun': '09d.png',
    'Tue, 9 Jun': '10d.png',
    'Wed, 10 Jun': 'Cloud-background.png',
  };

  return (
    <div className="flex-grow flex items-center justify-center mb-40">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-4xl mx-auto">
        {['Tomorrow', 'Sun, 7 Jun', 'Mon, 8 Jun', 'Tue, 9 Jun', 'Wed, 10 Jun'].map((day, index) => (
          <div key={index} className="bg-customSecondaryDark p-3 rounded-lg text-center w-32 h-44" style={{ width: '120px', height: '177px', top: '148px', left: '759px', gap: '0px', opacity: '0px', background: '#1E213A' }}>
            <p className="text-xs mb-1">{day}</p>
            <img src={`/src/weather-app-master/${weatherIcons[day]}`} alt="weather icon" className="mx-auto mb-2 w-10 h-10" />
            <p className="text-xs"><span className="font-semibold">16°C</span> 11°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetallaArri;
