import React, { useEffect, useState } from 'react';
import WeatherDay from './WeatherDay';
import LoadingComponent from './Loading';
import { useNavigate, useLocation } from 'react-router-dom';

const WeatherList = ({ weatherData }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedDay, setSelectedDay] = useState(null);
    const handleDayClick = (dayIndex) => {
        if (selectedDay === dayIndex) {
            navigate('/')
            setSelectedDay(null);
        } else {
            navigate(`/day/${dayIndex}`)
        }
    };

    useEffect(() => {
        // 解析 URL 中的 dayIndex
        const match = location.pathname.match(/\/day\/(\d+)/);
        if(match) {
            const dayIndex = parseInt(match[1]);
            setSelectedDay(dayIndex);
        }
    }, [location]);

    if (!weatherData) {
        return <LoadingComponent />;
    }
    const fiveDayData = weatherData.slice(0, 5);

    return (
        <div className="weather-list">
            {fiveDayData.map((dayData, index) => (
                <WeatherDay key={index} data={dayData} dayIndex={index} onDayClick={handleDayClick} isSelected={selectedDay === index} />
            ))}
        </div>
    );
};

export default WeatherList;
