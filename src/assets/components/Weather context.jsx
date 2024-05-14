import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create a context for weather-related state
const WeatherContext = createContext();

// Custom hook to use the weather context
export const useWeatherContext = () => useContext(WeatherContext);

// Weather context provider component
export const WeatherContextProvider = ({ children }) => {
  // State variables
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);

  // Fetch current weather data
  const fetchCurrentWeather = async (city) => {
    const currentWeatherApiKey = '55da60099dd1b8e7378a0a5da0283fba';
    const currentWeatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';

    try {
      const response = await axios.get(`${currentWeatherBaseUrl}?q=${city}&appid=${currentWeatherApiKey}&units=imperial`);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching current weather:', error.message);
    }
  };

  // Fetch 5-day forecast data
  const fetchForecast = async (city) => {
    const forecastApiKey = '044dc32dae5bad14fd2034fe6bb5047a';
    const forecastBaseUrl = 'https://api.openweathermap.org/data/2.5/forecast';

    try {
      const response = await axios.get(`${forecastBaseUrl}?q=${city}&appid=${forecastApiKey}&units=metric`);
      setForecast(response.data.list);
    } catch (error) {
      console.error('Error fetching forecast:', error.message);
    }
  };

  // useEffect to fetch weather data on component mount
  useEffect(() => {
    fetchCurrentWeather('Jaipur'); // Fetch initial weather data for Jaipur
    fetchForecast('Jaipur'); // Fetch initial forecast data for Jaipur
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, forecast }}>
      {children}
    </WeatherContext.Provider>
  );
};
