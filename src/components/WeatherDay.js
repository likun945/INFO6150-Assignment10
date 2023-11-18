import React from 'react';
import './WeatherDay.css';
import Loading from './Loading'; // Import the LoadingComponent

const WeatherDay = ({ data, dayIndex, onDayClick, isSelected  }) => {
    if (!data) {
        return <Loading />; // Use the LoadingComponent here
    }

    const unixTimestampToDate = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
        const formattedDate = date.toLocaleDateString('en-US');
        return `${dayOfWeek}, ${formattedDate}`;
    };

    const weatherIcons = {
        Clear: "☀️",
        Rain: "🌧️",
        Clouds: "☁️",
        Snow: "❄️"
    };
    const weatherCondition = data?.weather?.[0]?.main || 'Unknown';
    const weatherIcon = weatherIcons[weatherCondition] || '🌈';
    const dayClass = isSelected ? "weather-day selected" : "weather-day";

    const handleClick = () => {
        onDayClick(dayIndex);
    };
    return (
        <div className={dayClass} onClick={handleClick}>
            <h3>{data.dt ? unixTimestampToDate(data.dt) : 'Date Unknown'}</h3>
            <p>High: {data?.temp?.max?.toFixed(1) || 'N/A'}°C</p>
            <p>Low: {data?.temp?.min?.toFixed(1) || 'N/A'}°C</p>
            <p>Weather: {weatherIcon}</p>
        </div>
    );
};

export default WeatherDay;
