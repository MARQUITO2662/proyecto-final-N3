import React from 'react';

const DetailsPanel = ({ weatherData, kelvinToCelsius }) => {
  const forecastDays = weatherData ? weatherData.list.slice(1, 6) : [];

  return (
    <div 
      className="relative" 
      style={{ width: '981px', height: '1023px', background: '#100E1D' }}
    >
      <div className="flex justify-end p-4">
        <button className="bg-gray-700 text-white p-2 rounded-full mx-2">°C</button>
        <button className="bg-gray-700 text-white p-2 rounded-full">°F</button>
      </div>
      <div className="grid grid-cols-5 gap-4 p-8">
        {forecastDays.map((item, index) => (
          <div 
            key={index} 
            className="text-center text-white p-4" 
            style={{ width: '120px', height: '177px', background: '#1E213A' }}
          >
            <p>{new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</p>
            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt={item.weather[0].description} />
            <p>{kelvinToCelsius(item.main.temp)}°C</p>
          </div>
        ))}
      </div>
      <div 
        className="text-white text-2xl font-bold p-8" 
        style={{ background: '#E7E7EB', width: '220px', height: '28px' }}
      >
        Today’s Highlights
      </div>
      <div className="grid grid-cols-2 gap-4 p-8">
        <div 
          className="text-center text-white p-4" 
          style={{ width: '328px', height: '204px', background: '#1E213A' }}
        >
          <p>Wind Status</p>
          <p>{weatherData ? `${weatherData.list[0].wind.speed} m/s` : 'Loading...'}</p>
        </div>
        <div 
          className="text-center text-white p-4" 
          style={{ width: '328px', height: '204px', background: '#1E213A' }}
        >
          <p>Humidity</p>
          <p>{weatherData ? `${weatherData.list[0].main.humidity}%` : 'Loading...'}</p>
        </div>
        <div 
          className="text-center text-white p-4" 
          style={{ width: '328px', height: '204px', background: '#1E213A' }}
        >
          <p>Visibility</p>
          <p>{weatherData ? `${weatherData.list[0].visibility / 1000} km` : 'Loading...'}</p>
        </div>
        <div 
          className="text-center text-white p-4" 
          style={{ width: '328px', height: '204px', background: '#1E213A' }}
        >
          <p>Air Pressure</p>
          <p>{weatherData ? `${weatherData.list[0].main.pressure} hPa` : 'Loading...'}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPanel;
