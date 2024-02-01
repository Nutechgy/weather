window.onload = () => {
  const apiKey = '55da60099dd1b8e7378a0a5da0283fba';
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}&unit
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        updateWeatherVideo(data.weather[0].main);
        updateWeatherInfo(data);
        updateSearchHistory(city)
      } else {
        console.error('Weather API request failed with status: ${response.sta
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  function updateWeatherInfo(data) {
  const weatherInfoElement = document.getElementById('weather-info');
   weatherInfoElement.innerHTML = `
  <div>City: ${data.name}</div>
  <div>Date: ${new Date(data.dt * 1000).toDateString()}</div>
  <div>Temperature: ${data.main.temp}°F</div>
  <div>Humidity: ${data.main.humidity}%</div>
  <div>Wind Speed: ${data.wind.speed} km/h</div>
  <div>Weather Icon: <i class="wi wi-${data.weather[0].icon}"></i></div>
  }
  const updateWeatherVideo = (weatherCondition) => {
    const videoElement = document.querySelector(".forecast-card .weather-vide
    if (weatherCondition === "rainy") {
      videoElement.src = "c:\\Users\\terem\\Downloads\\pexels-mikhail-nilov-6
    } else if (weatherCondition === "Rainy") {
      videoElement.src = "c:\\Users\\terem\\Downloads\\production_id_4832152 
    }
    // Add more conditions
  }
  // Fetch weather data and update videos on page load
  // window.onload = () => {
    const randomCity = "Brooklyn"; // Replace with your random city logic
    fetchWeatherData(randomCity);
  // }
  document.getElementById('search-button').addEventListener('click', function
    var cityInput = document.getElementById('city-input').value;
    if (cityInput.trim() !== '') {
      fetchWeatherData(cityInput);
    } else {
      alert('Please enter a city');
    }
  });
  function updateSearchHistory(city) { 
  var historyList = document.getElementById('history-list');
  var listItem = document.createElement('li');
  listItem.textContent = city;
  // Add click event to each history item to retrieve weather for that city a
  listItem.addEventListener('click', function () {
    fetchWeatherData(city);
    historyList.appendChild(listItem);
    updateSearchHistory(cityInput);
  });
}
}        

