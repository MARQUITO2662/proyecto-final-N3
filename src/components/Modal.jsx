import React, { useState, useEffect } from 'react';
import useWeather from '../hooks/useWeather';
import { FaCrosshairs, FaMapMarkerAlt } from 'react-icons/fa';
import CloudBackground from '../weather-app-master/Cloud-background.png';
import TenDIcon from '../weather-app-master/10d.png';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const { weatherData, city, getLocation, kelvinToCelsius } = useWeather();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="flex h-[1023px] w-[459px] bg-customSecondaryDark relative mx-auto">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-[1023px] w-[459px] bg-customSecondaryDark text-white z-50 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button className="absolute top-4 right-4 text-white text-3xl" onClick={toggleSidebar}>×</button>
        <div className="p-4">
          <input type="text" placeholder="search location" className="w-full p-2 mb-4 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none"/>
          <button className="w-full p-2 mb-4 bg-blue-600 rounded hover:bg-blue-700">Search</button>
          <a href="#" className="block p-2 mb-2 hover:bg-gray-700 rounded">London</a>
          <a href="#" className="block p-2 mb-2 hover:bg-gray-700 rounded">Barcelona</a>
          <a href="#" className="block p-2 mb-2 hover:bg-gray-700 rounded">Long Beach</a>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow relative">
        <div className="absolute top-[103px] left-[-111px] w-[510px] h-[376px] bg-cover opacity-5" style={{ backgroundImage: `url(${CloudBackground})` }}></div>
        <div className="absolute inset-0 bg-isorainswrsday bg-cover"></div>
        <div className="relative z-10 p-4 flex flex-col items-center">
          <div className="flex justify-between items-center w-full mb-4">
            <button className="p-2 bg-customButton text-customtext rounded" onClick={toggleSidebar}>Search for places</button>
            <button className="p-2 bg-customButton text-customtext rounded-full" onClick={getLocation}>
              <FaCrosshairs size={24} />
            </button>
          </div>
          {weatherData && (
            <div className="text-center mt-8">
              <img src={TenDIcon} alt="Weather Icon" className="w-[202px] h-[234px] mt-[191px] mb-[129px]" />
              <p className="text-6xl mb-8">{kelvinToCelsius(weatherData.list[0].main.temp)}°C</p>
              <p className="text-xl">{weatherData.list[0].weather[0].description}</p>
              <p className="text-lg text-gray-400 mb-4">Today • {new Date().toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}</p>
              <div className="flex items-center justify-center mt-2 mb-8">
                <FaMapMarkerAlt size={24} className="mr-2" />
                <p className="text-lg text-gray-400">{city}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;