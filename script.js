document.addEventListener('DOMContentLoaded'), function () {
  const currentApiKey = '55da60099dd1b8e7378a0a5da0283fba'; // API key for current weather
   const forecastApiKey = '044dc32dae5bad14fd2034fe6bb5047a'; // API key for 5-day forecast
   const currentBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
   const forecastBaseUrl = 'https://api.openweathermap.org/data/2.5/forecast';

  function fetchWeatherData(city) {
  fetch(`${currentBaseUrl}?q=${city}&appid=${currentApiKey}&units=imperial`)

    .then(response => response.json())
    .then(data => {
        console.log(data); // Log API response data
        // Update current weather info
        updateCurrentWeather(data);
        // Fetch 5-day forecast data
        return fetch(`${forecastBaseUrl}?q=${city}&appid=${forecastApiKey}&units=imperial`);
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log API response data
        // Update forecast
        updateForecast(data);
    })
    .catch(error => console.error('Error fetching weather data:', error));
  }

   function updateWeatherInfo (data) {
     // Update current weather info on the page
     const currentWeatherElement = document.getElementById('current-weather');
     currentWeatherElement.innerHTML = `
       <div>City: ${data.name}</div>
       <div>Date: ${new Date(data.dt * 1000).toDateString()}</div>
       <div>Temperature: ${data.main.temp}°F</div>
       <div>Humidity: ${data.main.humidity}%</div>
       <div>Wind Speed: ${data.wind.speed} km/h</div>
       <div>Weather Icon: <i class="wi wi-${data.weather[0].icon}"></i></div>
     `;
     
     // Update weather video
     updateWeatherVideo(data.weather[0].main.toLowerCase());
   }
   function updateForecast  (data)  { 
     // Update forecast for the next 5 days
     const forecastElement = document.getElementById('forecast-cards');
     forecastCardsElement.innerHTML = ''; // Clear previous forecast data
     for (let i = 0; i < 5; i++) {
       const forecast = data.list[i];
       const forecastCard = document.createElement('div');
       forecastCard.classList.add('forecast-card');
       forecastElement.innerHTML += `
         <div class="forecast-card">
           <div class="day">${new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</div>
           <div class="temperature">${forecast.main.temp}°F</div>
           <div class="condition">${forecast.weather[0].description}</div>
           <div class="wind-speed">${forecast.wind.speed} km/h Wind</div>
           <div class="humidity">${forecast.main.humidity}% Humidity</div>
           <i class="wi wi-${forecast.weather[0].icon}"></i>
       `;
       forecastElement.appendChild(forecastCard);
      }
    }
   }
   function updateWeatherVideo(weatherCondition) {
     const videoElement = document.querySelector(".forecast-card .weather-video video");
     switch (weatherCondition) {
       case "snowy":
       videoElement.src = "C:\\Users\\terem\\OneDrive\\Documents\\weather\\videos\\snowy.mp4";
       break;
     case "cloudy":
       videoElement.src = "C:\\Users\\terem\\OneDrive\\Documents\\weather\\videos\\cloudy.mp4";
       break;
     case "rain":
       videoElement.src = "C:\\Users\\terem\\OneDrive\\Documents\\weather\\videos\\scattered showers.mp4";
       break;
     case "heavyWind,rain,floodWatch":
       videoElement.src = "C:\\Users\\terem\\OneDrive\\Documents\\weather\\videos\\heavy wind,rain,floodwatch.mp4";
       break;
     case "scatteredShowers":
       videoElement.src = "C:\\Users\\terem\\OneDrive\\Documents\\weather\\videos\\scattered showers.mp4";
       break;
     case "lightRain":
       videoElement.src = "C:\\Users\\terem\\OneDrive\\Documents\\weather\\videos\\light rain.mp4";
       break;
     case "brightandsunny":
       videoElement.src = "C:\\Users\\terem\\OneDrive\\Documents\\weather\\videos\\brightandsunny.mp4";
       break;
     case "foggy":
       videoElement.src = "C:\\Users\\terem\\OneDrive\\Documents\\weather\\videos\\foggy.mp4";
       break;
     case "tornadoWatch":
       videoElement.src = "C:\\Users\\terem\\OneDrive\\Documents\\weather\\videos\\tornado.mp4";
       break;
     default:
       // Handle default case
       break;
   
   }
  
     }
     // Fetch weather data and update videos on page load
     const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', function() {
    const cityInput = document.getElementById('city-input');
    const city = cityInput.value;
    fetchWeatherData(city);
  });

   