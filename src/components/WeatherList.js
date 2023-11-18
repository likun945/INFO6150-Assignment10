import React from 'react';
import WeatherDay from './WeatherDay';
import LoadingComponent from './Loading';

const WeatherList = ({ weatherData }) => {
  if (!weatherData) {
    return <LoadingComponent />;
  }
  const fiveDayData = weatherData.slice(0, 5);

  return (
    <div className="weather-list">
      {fiveDayData.map((dayData, index) => (
        <WeatherDay key={index} data={dayData} />
      ))}
    </div>
  );
};

export default WeatherList;
