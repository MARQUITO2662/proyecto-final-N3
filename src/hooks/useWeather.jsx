import { useState, useEffect } from 'react';

const useWeather = (defaultLocation = { lat: 44.34, lon: 10.99 }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(defaultLocation);
  const [city, setCity] = useState('');

  useEffect(() => {
    if (location.lat && location.lon) {
      fetchWeather(location.lat, location.lon);
      fetchCityName(location.lat, location.lon);
    }
  }, [location]);

  const fetchWeather = async (lat, lon) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5e0663c97bbc6806e669376ae4d7ae70`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const fetchCityName = async (lat, lon) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5e0663c97bbc6806e669376ae4d7ae70`);
      const data = await response.json();
      setCity(data.name);
    } catch (error) {
      console.error('Error fetching city name:', error);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      }, (error) => {
        console.error('Error getting location:', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const searchLocation = (ubicacion) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ubicacion}&appid=5e0663c97bbc6806e669376ae4d7ae70`)
      .then(response => response.json())
      .then(data => {
        if (data.coord) {
          setLocation({ lat: data.coord.lat, lon: data.coord.lon });
        } else {
          console.error('Location not found');
        }
      })
      .catch(error => {
        console.error('Error searching location:', error);
      });
  };

  const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);
  const kelvinToFahrenheit = (kelvin) => ((kelvin - 273.15) * 9/5 + 32).toFixed(2);

  return {
    weatherData,
    city,
    getLocation,
    kelvinToCelsius,
    kelvinToFahrenheit,
    searchLocation,
  };
};

export default useWeather;
