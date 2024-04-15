document.addEventListener('DOMContentLoaded', function () {
  const weatherContainer = document.getElementById("weather-container");
  const currentWeatherApiKey = '55da60099dd1b8e7378a0a5da0283fba';
  const forecastApiKey = '044dc32dae5bad14fd2034fe6bb5047a';
  const currentWeatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const forecastBaseUrl = 'https://api.openweathermap.org/data/2.5/forecast';
 
  function fetchWeatherData(city) {
    fetch(`${currentWeatherBaseUrl}?q=${city}&appid=${currentWeatherApiKey}&units=imperial`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        updateCurrentWeather(data);
        return fetch(`${forecastBaseUrl}?q=${city}&appid=${forecastApiKey}&units=imperial`);
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        updateForecast(data);
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }
 //Function to generate weather cards based on forcast data
  function updateCurrentWeatherInfo(data) {
    data.forEach(dayData) ;
      const weatherCard = document.createElement("div");
      weatherCard.classList.add("forecast-card");

      const dayElement = document.createElement("div");
      dayElement.classList.add("day");
      dayElement.textContent = dayData.day;

      const weatherVideo = document.createElement("div");
      weatherVideo.classList.add("weather-video");
      weatherVideo.classList.add(dayData.weatherClass); // Assuming 'weatherClass' is a class name representing the weather condition
      weatherVideo.innerHTML = `<video loop muted autoplay>
                                  <source src="${dayData.videoSrc}" type="video/mp4" alt="${dayData.weatherDescription}">
                                </video>`;
    }
    const currentWeatherElement = document.getElementById('current-weather');
    currentWeatherElement.innerHTML = `
      <div>City: ${data.name}</div>
      <div>Date: ${new Date(data.dt * 1000).toDateString()}</div>
      <div>Temperature: ${data.main.temp}°F</div>
      <div>Humidity: ${data.main.humidity}%</div>
      <div>Wind Speed: ${data.wind.speed} km/h</div>
      <div>Weather Icon: <i class="wi wi-${data.weather[0].icon}"></i></div>
    `;
    
    updateWeatherVideo(data.weather[0].main.toLowerCase());
  })

 
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
      `;
      forecastElement.appendChild(forecastCard);
    }
function updateWeatherVideo(weatherCondition) {
  const videoPath = "C:\\Users\\terem\\OneDrive\\Documents\\weather\\videos\\";
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

  const videoElement = document.querySelector(".forecast-card .weather-video video");
  const videoSrc = videoPath + (videoMap[weatherCondition] || "default.mp4");
  videoElement.src = videoSrc;
}

// Event listener for search button click
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function() {
  const cityInput = document.getElementById('city-input');
  const city = cityInput.value;
  fetchWeatherData(city);
})}
;