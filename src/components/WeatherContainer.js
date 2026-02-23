import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import { getCoordinates, getWeather } from "../services/weatherService";

const WeatherContainer = () => {
  const [weather, setWeather] = useState(null);

  // ✅ Load default location on first render
  useEffect(() => {
    handleSearch("Atlanta");
  }, []);

  const handleSearch = async (query) => {
    try {
      const coords = await getCoordinates(query);
      if (!coords) return;

      const weatherData = await getWeather(coords.lat, coords.lon);
      setWeather(weatherData);
    } catch (error) {
      console.error("Weather fetch error:", error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <WeatherCard weather={weather} />
    </div>
  );
};

export default WeatherContainer;