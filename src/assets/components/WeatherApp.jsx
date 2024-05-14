import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDashboard = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const currentWeatherApiKey = '55da60099dd1b8e7378a0a5da0283fba';
  const currentWeatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const forecastApiKey = '044dc32dae5bad14fd2034fe6bb5047a';
  const forecastBaseUrl = 'https://api.openweathermap.org/data/2.5/forecast';

  useEffect(() => {
    if (city) {
      fetchCurrentWeather(city);
      fetchForecast(city);
    }
  }, [city]);

  const fetchCurrentWeather = async (city) => {
    try {
      const response = await axios.get(`${currentWeatherBaseUrl}?q=${city}&appid=${currentWeatherApiKey}&units=imperial`);
      setCurrentWeather(response.data);
      addToSearchHistory(city);
    } catch (error) {
      console.error('Error fetching current data:', error.message);
      setCurrentWeather(null);
    }
  };

  const fetchForecast = async (city) => {
    try {
      const response = await axios.get(`${forecastBaseUrl}?q=${city}&appid=${forecastApiKey}&units=metric`);
      setForecast(response.data.list);
    } catch (error) {
      console.error('Error fetching forecast data:', error.message);
      setForecast([]);
    }
  };

  const updateWeatherVideo = (weatherCondition) => {
    // Function to update weather video
    // Implementation goes here
  };

  const addToSearchHistory = (city) => {
    setSearchHistory(prevHistory => [city, ...prevHistory]);
  };

  const handleCurrentWeatherSearch = () => {
    if (city.trim()) {
      fetchCurrentWeather(city);
    } else {
      alert('Please enter a city name.');
    }
  };

  const handleForecastSearch = () => {
    if (city.trim()) {
      fetchForecast(city);
    } else {
      alert('Please enter a city name.');
    }
  };

  return (
    <div className="container">
      {/* Current Weather Section */}
      <div id="current-weather">
        {currentWeather && (
          <div>
            <div className="day">{new Date(currentWeather.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</div>
            <div className="weather-video-container">
              <video loop muted autoPlay>
                <source src={updateWeatherVideo(currentWeather.weather[0].main.toLowerCase())} />
              </video>
            </div>
            <div className="weather-details-container">
              <div className="weather-details">
                <div className="datetime">{new Date(currentWeather.dt * 1000).toLocaleString()}</div>
                <div className="condition">{currentWeather.weather[0].description}</div>
                <div className="temperature">{currentWeather.main.temp}°F</div>
                <div className="wind-speed">{currentWeather.wind.speed} mph Wind</div>
                <div className="humidity">{currentWeather.main.humidity}% Humidity</div>
                <i className={`wi wi-${currentWeather.weather[0].icon}`}></i>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Forecast Section */}
      <div id="forecast">
        {forecast.map((forecastItem, index) => (
          <div className="forecast-card" key={index}>
            <div className="day">{new Date(forecastItem.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</div>
            <div className="weather-video-container">
              <video loop muted autoPlay>
                <source src={updateWeatherVideo(forecastItem.weather[0].main.toLowerCase())} />
              </video>
            </div>
            <div className="weather-details-container">
              <div className="weather-details">
                <div className="date">{new Date(forecastItem.dt * 1000).toLocaleDateString()}</div>
                <div className="condition">{forecastItem.weather[0].description}</div>
                <div className="temperature">{forecastItem.main.temp}°F</div>
                <div className="wind-speed">{forecastItem.wind.speed} mph Wind</div>
                <div className="humidity">{forecastItem.main.humidity}% Humidity</div>
                <i className={`wi wi-${forecastItem.weather[0].icon}`}></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search Form */}
      <div className="search">
        <h2>Search History</h2>
        <form id="search-form">
          <label htmlFor="city">Enter City:</label>
          <input type="text" id="city" placeholder="City" aria-label="Enter City" value={city} onChange={(e) => setCity(e.target.value)} />
          <button type="button" id="current-weather-btn" onClick={handleCurrentWeatherSearch}>Search Current Weather</button>
          <button type="button" id="forecast-btn" onClick={handleForecastSearch}>5-Day Forecast</button>
        </form>
        <div id="search-history">
          <ul id="history-list">
            {searchHistory.map((city, index) => (
              <li key={index}>{city}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
