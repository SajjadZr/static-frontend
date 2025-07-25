const Weather = () => {
  // mock data for now
  const weather = {
    location: "Tehran",
    temperature: 31,
    condition: "Sunny ☀️"
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h4>Weather in {weather.location}</h4>
      <p>{weather.temperature}°C - {weather.condition}</p>
    </div>
  );
};

export default Weather;
