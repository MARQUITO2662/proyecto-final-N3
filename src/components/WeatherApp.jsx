// WeatherApp.jsx (componente principal)
import React, { useState } from 'react';
import DetalleAbajo from './DetalleAbajo';
import DetallaArri from './DetallaArri';
import Modal from './Modal';

const WeatherApp = () => {
  const [selectedCity, setSelectedCity] = useState('New York');
  const [selectedCountry, setSelectedCountry] = useState('US');

  const handleCityCountryChange = (city, country) => {
    setSelectedCity(city);
    setSelectedCountry(country);
  };

  return (
    <div>
      <Modal onCityCountryChange={handleCityCountryChange} />
      <DetalleAbajo city={selectedCity} country={selectedCountry} />
      <DetallaArri city={selectedCity} country={selectedCountry} />
    </div>
  );
};

export default WeatherApp;
