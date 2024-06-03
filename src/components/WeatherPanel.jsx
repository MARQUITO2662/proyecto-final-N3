import React from 'react';
import BotonUbicacion from './BotonUbicacion';

const WeatherPanel = () => {
  return (
    <div className="relative w-[459px] h-[1023px] bg-customDark">
      <div className="absolute top-4 left-4">
        <button className="text-white bg-blue-500 px-4 py-2 rounded">
          Search for places
        </button>
      </div>
      <div className="absolute top-4 right-4">
        <BotonUbicacion onClick={() => console.log('Get Location')} />
      </div>
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 opacity-5" style={{ background: 'url("/Cloudy.png")', backgroundSize: 'cover', width: '100%', height: '50%' }}></div>
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2" style={{ background: 'url("/IsoRainSwrsDay.png")', backgroundSize: 'cover', width: '192px', height: '169px' }}></div>
      <div className="absolute top-80 left-1/2 transform -translate-x-1/2 text-9xl text-white" style={{ width: '192px', height: '169px' }}>15°C</div>
      <div className="absolute top-[768px] left-1/2 transform -translate-x-1/2 text-xl font-semibold text-center bg-[#A09FB1]">Shower</div>
      <div className="absolute top-[897px] left-[148px] text-lg font-medium bg-[#88869D]">Today</div>
      <div className="absolute top-[897px] left-[238px] text-lg font-medium bg-[#88869D]">Fri, 5 Jun</div>
    </div>
  );
};

export default WeatherPanel;
