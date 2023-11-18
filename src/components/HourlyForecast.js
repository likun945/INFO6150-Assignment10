import React from 'react';
import './HourlyForecast.css';

const HourlyForecast = ({ hourlyData }) => {
    const unixTimestampToHour = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
    };

    const getWeatherIcon = (weather) => {
        const main = weather.main.toLowerCase();
        switch (main) {
            case 'clouds':
                return '☁️';
            case 'rain':
                return '🌧️';
            case 'clear':
                return '☀️';
            case 'snow':
                return '❄️';
            default:
                return '🌈'; // 默认图标
        }
    };
    if (!hourlyData || hourlyData.length === 0) {
        return (
            <div className="hourly-forecast">
                <h2>Hourly Forecast</h2>
                <div className="no-data">
                    <p>🚫 Not available now</p>
                </div>
            </div>
        );
    }

    return (
        <div className="hourly-forecast">
            <h2>Hourly Forecast</h2>
            <div className="hourly-items">
                {hourlyData.map((hour, index) => (
                    <div key={index} className="hour-item">
                        <p><strong>{unixTimestampToHour(hour.dt)}</strong></p>
                        <p>Temp: {hour.temp.toFixed(1)}°C</p>
                        <p>Condition: {getWeatherIcon(hour.weather[0])} {hour.weather[0].main}</p>
                        <p>Desc: {hour.weather[0].description}</p>
                        <p>Wind: {hour.wind_speed} m/s</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HourlyForecast;
