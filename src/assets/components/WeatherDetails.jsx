import React from 'react';
import { useWeatherContext } from './WeatherContext';

const WeatherDashboard = () => {
  const { weather, forecast } = useWeatherContext();

  return (
    <div className="container">
      <h1 className="title">Weather Dashboard</h1>
      {/* Current Weather */}
      <div className="current-weather">
        <h2>Current Weather</h2>
        <div className="weather-details">
          <div className="condition">{weather.weather?.[0]?.description}</div>
          <div className="temperature">{weather.main?.temp}°F</div>
          <div className="wind-speed">{weather.wind?.speed} mph Wind</div>
          <div className="humidity">{weather.main?.humidity}% Humidity</div>
        </div>
      </div>
      {/* 5-Day Forecast */}
      <div className="forecast">
        <h2>5-Day Forecast</h2>
        <div className="forecast-cards">
          {forecast.map((item, index) => (
            <div className="forecast-card" key={index}>
              <div className="day">{item.dt_txt}</div>
              <div className="weather-details">
                <div className="condition">{item.weather?.[0]?.description}</div>
                <div className="temperature">{item.main?.temp}°C</div>
                <div className="wind-speed">{item.wind?.speed} m/s Wind</div>
                <div className="humidity">{item.main?.humidity}% Humidity</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
