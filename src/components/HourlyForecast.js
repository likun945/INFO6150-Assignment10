import React from 'react';
import './HourlyForecast.css';

const HourlyForecast = ({ hourlyData }) => {
    return (
        <div className="hourly-forecast">
            <h2>Hourly Forecast</h2>
            <div className="hourly-items">
                {hourlyData.map((hour, index) => (
                    <div key={index} className="hour-item">
                        <p><strong>{hour.time}</strong></p>
                        <p>Temp: {hour.temperature}°C</p>
                        <p>Condition: {hour.condition}</p>
                        <p>Precip: {hour.precipitation}%</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HourlyForecast;
