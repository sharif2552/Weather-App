import axios from 'axios';

const apiKey = '550934ca040639fa28579d072931c416';
const apiUrl = 'https://api.openweathermap.org/data/2.5';

export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(`${apiUrl}/weather?q=${city}&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
