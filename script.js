
window.onload = () => {
  const apiKey = '55da60099dd1b8e7378a0a5da0283fba';
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=imperial`);
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        updateWeatherVideo(data.weather[0].main);
        updateWeatherInfo(data);
        updateSearchHistory(city)
      } else {
        console.error('Weather API request failed with status: ${response.status}');
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);

    }
  };


  const updateWeatherVideo = (weatherCondition) => {
    const videoElement = document.querySelector(".forecast-card .weather-video video");
    if (weatherCondition === "rainy") {
      videoElement.src = "c:\\Users\\terem\\Downloads\\pexels-mikhail-nilov-6507555 (1080p).mp4"
    } else if (weatherCondition === "Rainy") {
      videoElement.src = "c:\\Users\\terem\\Downloads\\production_id_4832152 (720p).mp4"
    }
    // Add more conditions
  }
  if (rain){
    video.src = 'C:\Users\terem\OneDrive\Documents\weather\videos\scattered showers.mp4'

 }else if (cloudy) '\Users\terem\OneDrive\Documents\weather\videos\cloudy.mp4'

 if (heavyWind,rain,floodWatch)
    video.src = 'C:\Users\terem\OneDrive\Documents\weather\videos\heavy wind,rain,flood watch.mp4'
 

  else if (brightandsunny)'C:\Users\terem\OneDrive\Documents\weather\videos\brightandsunny.mp4'

  if (foggy)'C:\Users\terem\OneDrive\Documents\weather\videos\foggy.mp4'

  else if (lightRain)'C:\Users\terem\OneDrive\Documents\weather\videos\light rain.mp4'

  if (snowy)'C:\Users\terem\OneDrive\Documents\weather\videos\snowy.mp4'

  else if (scatteredShowers)'C:\Users\terem\OneDrive\Documents\weather\videos\scattered showers.mp4'

  if (tornadoWatch)'C:\Users\terem\OneDrive\Documents\weather\videos\tornado.mp4'


  // // Fetch weather data and update videos on page load
  // window.onload = () => {
  //   const randomCity = "YOUR_RANDOM_CITY"; // Replace with your random city logic
  //   fetchWeatherData(randomCity);
  // }

  document.getElementById('search-button').addEventListener('click', function () {
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

    // Add click event to each history item to retrieve weather for that city again
    listItem.addEventListener('click', function () {
      fetchWeatherData(city);

      historyList.appendChild(listItem);


    });
  }

  function updateWeatherInfo(city) {
    // use other api to get 5 day forecast
    const weatherContainer = document.querySelector('#weather-container')
    weatherContainer.innerHTML = ''
    console.log(weatherContainer)
    const forecast = document.createElement('div')
    forecast.innerHTML = `
    <div class="day">${data.name}</div>
<div class="weather-video sunny-bg">
  <video loop muted autoplay>
    <source src=${data.video} type="video/mp4"
      alt="${data.text}">
  </video>
</div>
<div class="details">
  <div class="temperature">${data.temp}</div>
  <div class="condition">${data.condition}</div>
  <div class="wind-speed">${data.wind} km/h Wind</div>
  <div class="humidity">${data.humidity}% Humidity</div>
  ${data.icon} <!-- Weather icon for sunny day -->
</div>
    `
  }
}                                                                 