document.addEventListener('DOMContentLoaded', function () {
  const weatherContainer = document.getElementById("weather-container");
  const currentWeatherApiKey = '55da60099dd1b8e7378a0a5da0283fba';
  const forecastApiKey = '044dc32dae5bad14fd2034fe6bb5047a';
  const currentWeatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const forecastBaseUrl = 'https://api.openweathermap.org/data/2.5/forecast';

 //Function to fetch current weather data
  function fetchCurrentWeather(city) {
    fetch(`${currentWeatherBaseUrl}?q=${city}&appid=${currentWeatherApiKey}&units=imperial`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        updateCurrentWeather(data);
        updateWeatherVideo(data.weather[0].main.toLowerCase());
        return fetch(`${forecastBaseUrl}?q=${city}&appid=${forecastApiKey}&units=imperial`);
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        updateForecast(data);
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }

    // Function to update current weather info
  function updateCurrentWeatherInfo(data) {
    const currentWeatherElement = document.getElementById('current-weather');
    currentWeatherElement.innerHTML = `
      <div>City: ${data.name}</div>
      <div>Date: ${new Date(data.dt * 1000).toDateString()}</div>
      <div>Temperature: ${data.main.temp}°F</div>
      <div>Humidity: ${data.main.humidity}%</div>
      <div>Wind Speed: ${data.wind.speed} km/h</div>
      <div>Weather Icon: <i class="wi wi-${data.weather[0].icon}"></i></div>
    `;
  }
    
 // Function to fetch 5-day forecast data
 function fetchForecast(city) {
  fetch(`${forecastBaseUrl}?q=${city}&appid=${forecastApiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      updateForecastCards(data);
    })
    .catch(error => console.error('Error fetching forecast data:', error));
  }

 //Function to update the 5 day forecast index cards
    function updateForecast(data) {
    const forecastElement = document.getElementById('forecast-cards');
    forecastElement.innerHTML = ''; // Clear previous forecast data
    for (let i = 0; i < 5; i++) {
      const forecast = data.list[i];
      const forecastCard = document.createElement('div');
      forecastCard.classList.add('forecast-card');
      forecastCard.innerHTML = `
        <div class="day">${new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</div>
        <div class="temperature">${forecast.main.temp}°F</div>
        <div class="condition">${forecast.weather[0].description}</div>
        <div class="wind-speed">${forecast.wind.speed} km/h Wind</div>
        <div class="humidity">${forecast.main.humidity}% Humidity</div>
        <i class="wi wi-${forecast.weather[0].icon}"></i>
        <div class="weather-video-container">
        <video loop muted autoplay>
          <source src="${getWeatherVideo(forecast.weather[0].main.toLowerCase())}" type="video/mp4">
        </video>
      </div>
      `;
      forecastCardElement.appendChild(forecastCard);
    }
  }
    //Function to get weather videos based on weather conditions
function getWeatherVideo(weatherCondition) {
  const videoPath = "videos.js/";
  const videoMap = {
      "snowy": "snowy.mp4",
      "cloudy": "cloudy.mp4",
      "rain": "scattered showers.mp4",
      "heavyWind,rain,floodWatch": "heavy wind,rain,floodwatch.mp4",
      "scatteredShowers": "scattered showers.mp4",
      "lightRain": "light rain.mp4",
      "brightandsunny": "brightandsunny.mp4",
      "foggy": "foggy.mp4",
      "tornadoWatch": "tornado.mp4"
  };
  return videoPath + (videoMap[weatherCondition] || "default.mp4");
}

// Event listener for search button click for current weather
const currentWeatherBtn = document.getElementById('current-weather-btn');
currentWeatherBtn.addEventListener('click', function() {
  const cityInput = document.getElementById('city');
  const city = cityInput.value;
  if (city) {
    fetchCurrentWeather(city);
  } else {
    alert('Please enter a city name.');
  fetchWeatherData(city);
}
});

 // Event listener for the "5-Day Forecast" button
 const forecastBtn = document.getElementById('forecast-btn');
 forecastBtn.addEventListener('click', function () {
   const cityInput = document.getElementById('city');
   const city = cityInput.value.trim();
   if (city) {
     fetchForecast(city);
   } else {
     alert('Please enter a city name.');
   }
 });
});