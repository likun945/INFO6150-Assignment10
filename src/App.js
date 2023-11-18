import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherList from './components/WeatherList';
import HourlyForecast from './components/HourlyForecast';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyData, setHourlyData] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const now = new Date();
  const currentHour = now.getHours();
  const hoursTillMidnight = 24 - currentHour;
  const getHourlyDataForDay = (dayIndex) => {
    if (dayIndex == 0) { 
      return hourlyData.slice(0, hoursTillMidnight);
    } else {
      const startIndex = (dayIndex - 1) * 24 + hoursTillMidnight;
      return hourlyData.slice(startIndex, startIndex + 24);
    }
  };

  const HourlyForecastWithParams = () => {
    const { dayIndex } = useParams();
    return <HourlyForecast hourlyData={getHourlyDataForDay(dayIndex)} />;
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const url = 'https://openweathermap.org/data/2.5/onecall?lat=42.4251&lon=-71.0662&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02';
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data.daily);
        setHourlyData(data.hourly);
      } catch (error) {
        console.error("Failed to fetch weather data", error);
      }
    };
    fetchWeatherData();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Boston 5-Day Weather Forecast</h1>
        </header>
        <WeatherList weatherData={weatherData} selectedDay={selectedDay} />
        <Routes>
          <Route path="/day/:dayIndex" element={<HourlyForecastWithParams />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;