import axios from 'axios';

const forecastApiKey = '044dc32dae5bad14fd2034fe6bb5047a';
const forecastBaseUrl = 'https://api.openweathermap.org/data/2.5/forecast';

export const fetchForecast = async (city) => {
  try {
    const response = await axios.get(`${forecastBaseUrl}?q=${city}&appid=${forecastApiKey}&units=metric`);
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw new Error('Failed to fetch forecast data');
  }
};
