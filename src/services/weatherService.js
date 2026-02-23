import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_KEY;

// 🔹 Convert human search → coordinates
export const getCoordinates = async (query) => {
  const response = await axios.get(
    "https://api.openweathermap.org/geo/1.0/direct",
    {
      params: {
        q: query,
        limit: 1,
        appid: API_KEY,
      },
    }
  );

  return response.data[0];
};

// 🔹 Get weather using lat/lon
export const getWeather = async (lat, lon) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        lat,
        lon,
        units: "imperial",
        appid: API_KEY,
      },
    }
  );

  return response.data;
};