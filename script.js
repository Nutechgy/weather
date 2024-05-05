document.addEventListener('DOMContentLoaded', function () {
  const currentWeatherApiKey = '55da60099dd1b8e7378a0a5da0283fba';
  const currentWeatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const forecastApiKey = '044dc32dae5bad14fd2034fe6bb5047a';
  const forecastBaseUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  console.log('./videos.js/snowy.mp4')
  // Function to get weather videos based on weather conditions
  function updateWeatherVideo(weatherCondition) {
    const videoPath = "./videos.js";
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

    const videoFileName = videoMap[weatherCondition.toLowerCase()] || "default.mp4";
    return `${videoPath}/${videoFileName}`;
  }

  // Function to fetch current weather data
  function fetchCurrentWeather(city) {
    fetch(`${currentWeatherBaseUrl}?q=${city}&appid=${currentWeatherApiKey}&units=imperial`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch current weather data');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        updateCurrentWeatherInfo(data);
        updateWeatherVideo(data.weather[0].main.toLowerCase());
        return fetch(`${forecastBaseUrl}?q=${city}&appid=${forecastApiKey}&units=imperial`);
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch forecast data');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        updateCurrentWeather(data);
      })
      .catch(error => console.error('Error fetching current data:', error.message));

    // Event listener for search button click for current weather

    const currentWeatherBtn = document.getElementById('current-weather-btn');
    currentWeatherBtn.addEventListener('click', function () {
      const cityInput = document.getElementById('city');
      const city = cityInput.value;
      if (city) {
        fetchCurrentWeather(city);
      } else {
        alert('Please enter a city name.');
      }
    });

    // Function to update current weather info

    function updateCurrentWeatherInfo(data) {
      const currentWeatherElement = document.getElementById('current-weather');
      const currentDate = new Date(data.dt * 1000);
      currentWeatherElement.innerHTML = `
      <div class="day">${currentDate.toLocaleDateString('en-US', { weekday: 'long' })}<
      <div class="datetime">${currentDate.toLocaleString()}</div>
      <div class="weather-info">
      <div class="temperature">${data.main.temp}°F</div>
      <div class="condition">${data.weather[0].description}</div>
      <div class="wind-speed">${data.wind.speed} km/h Wind</div>
      <div class="humidity">${data.main.humidity}% Humidity</div>
      <i class="wi wi-${data.weather[0].icon}"></i>
      <div class="weather-video-container">
        <video loop muted autoplay>
          <source src="${updateWeatherVideo(data.weather[0].main.toLowerCase())}" type=
        </video>
      </div>       
      `;

      // Update the weather icon class

      const weatherIconElement = currentWeatherElement.querySelector('.wi.weather-icon');
      weatherIconElement.className = `wi wi-${data.weather[0].icon}`;
    }

    // Function to handle search history

    function handleSearchHistory(city) {
      let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
      if (!searchHistory.includes(city)) {
        searchHistory.push(city);

        localStorage.setItem('sea
        
        // Update the search history UI if needed
      }
    }

    // Function to fetch 5-day forecast data

    function fetchForecast(city) {
      fetch(`${forecastBaseUrl}?q=${city}&appid=${forecastApiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          updateForecast(data);
        })
        .catch(error => console.error('Error fetching forecast data:', error));
    }

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
    // Function to update the 5-day forecast index cards
    
    function updateForecast(data) {
      const forecastElement = document.getElementById('forecast-cards');
      if (!forecastElement) {
        console.error('Forecast element not found in the DOM.');
        return; // Exit the function if forecast element is not found
      }
      if (!data || !data.list || !Array.isArray(data.list)) {
        console.error('Invalid forecast data:', data);
        return; // Exit the function if forecast data is invalid or missing
      }
      forecastElement.innerHTML = ''; // Clear previous forecast data
      let cardCounter = 0; // Counter to limit cards to five
      for (let i = 0; i < data.list.length; i++) {
        const forecast = data.list[i];
        const forecastCard = document.createElement('div');
        const forecastDate = new Date(forecast.dt_txt); // Use the forecast date/time
        forecastCard.classList.add('forecast-card');
        forecastCard.innerHTML = `
      <div class="day">${forecastDate.toLocaleDateString('en-US', { weekday: 'long' })}
      <div class="temperature">${forecast.main.temp}°F</div>
      <div class="condition">${forecast.weather[0].description}</div>
      <div class="wind-speed">${forecast.wind.speed} km/h Wind</div>
      <div class="humidity">${forecast.main.humidity}% Humidity</div>
      <i class="wi wi-${forecast.weather[0].icon}"></i>
      <div class="weather-video-container">
        <video loop muted autoplay>
          <source src="${updateWeatherVideo(forecast.weather[0].main.toLowerCase())}">
        </video>
      </div>
    `;
        forecastElement.appendChild(forecastCard);
        cardCounter++;
        if (cardCounter >= 5) {
          break; // Limit to five forecast cards
        }
      }
    }
  }
})