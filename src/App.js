import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherList from './components/WeatherList';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const url = 'https://openweathermap.org/data/2.5/onecall?lat=42.4251&lon=-71.0662&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02';
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data.daily);
      } catch (error) {
        console.error("Failed to fetch weather data", error);
      }
    };
    fetchWeatherData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>5-Day Weather Forecast</h1>
      </header>
      <WeatherList weatherData={weatherData} />
    </div>
  );
}

export default App;
