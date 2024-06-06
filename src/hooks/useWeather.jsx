

// hooks/useWeather.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '5e0663c97bbc6806e669376ae4d7ae70';

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState('');
  
  const getLocation = async () => {
    try {
      const response = await axios.get('https://ipapi.co/json/');
      const location = response.data.city;
      searchLocation(location);
    } catch (error) {
      console.error(error);
    }
  };

  const kelvinToCelsius = (temp) => {
    return Math.round(temp - 273.15);
  };

  const searchLocation = async (location) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5e0663c97bbc6806e669376ae4d7ae70`);
      setWeatherData(response.data);
      setCity(location);
      
      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=5e0663c97bbc6806e669376ae4d7ae70`);
      setForecastData(forecastResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    weatherData,
    forecastData,
    city,
    getLocation,
    kelvinToCelsius,
    searchLocation
  };
};

export default useWeather;



