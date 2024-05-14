import axios from 'axios';

const currentWeatherApiKey = '55da60099dd1b8e7378a0a5da0283fba';
const currentWeatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchCurrentWeather = async (city) => {
  try {
    const response = await axios.get(`${currentWeatherBaseUrl}?q=${city}&appid=${currentWeatherApiKey}&units=imperial`);
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw new Error('Failed to fetch current weather data');
  }
};
