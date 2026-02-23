const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const { name, main, weather: weatherInfo } = weather;

  const getWeatherEmoji = (condition) => {
    const text = condition.toLowerCase();

    if (text.includes("cloud")) return "☁️";
    if (text.includes("rain")) return "🌧️";
    if (text.includes("clear")) return "☀️";
    if (text.includes("snow")) return "❄️";
    if (text.includes("storm")) return "⛈️";
    return "🌤️";
  };

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>🌡️ Temp: {main.temp}°F</p>
      <p>
        {getWeatherEmoji(weatherInfo[0].description)} Condition:{" "}
        {weatherInfo[0].description}
      </p>
      <p>💧 Humidity: {main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;