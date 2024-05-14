import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDashboard = () => {
  // State variables
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState('Jaipur');
  const [thisLocation, setLocation] = useState('');

  // Fetch current weather data
  const fetchCurrentWeather = async (city) => {
    const currentWeatherApiKey = '55da60099dd1b8e7378a0a5da0283fba';
    const currentWeatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const url = `${currentWeatherBaseUrl}?q=${city}&appid=${currentWeatherApiKey}&units=imperial`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching current weather:', error);
    }
  };

  // Fetch 5-day forecast data
  const fetchForecast = async (city) => {
    const forecastApiKey = '044dc32dae5bad14fd2034fe6bb5047a';
    const forecastBaseUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    const url = `${forecastBaseUrl}?q=${city}&appid=${forecastApiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setValues(response.data.list);
    } catch (error) {
      console.error('Error fetching forecast:', error);
    }
  };

  // Fetch weather data when the component mounts
  useEffect(() => {
    fetchCurrentWeather(place);
    fetchForecast(place);
  }, [place]);

  return (
    <div className="weather-dashboard">
      {/* Weather dashboard content will go here */}
    </div>
  );
};

export default WeatherDashboard;
