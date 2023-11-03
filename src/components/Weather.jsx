import React, { useEffect, useState } from 'react';
import { getWeatherData } from '../api';
import Location from './Location';
function Weather() {
    const [city, setCity] = useState('New York'); // Add state for city input
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        getWeatherData(city) // Use city state in API call
            .then((data) => {
                setWeatherData(data);
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
            });
    }, [city]); // Add city state to dependency array

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    // Display weather information from weatherData
    return (
        <div>
            <label htmlFor="cityInput">Enter city:</label> {/* Add label for input */}
            <input
                type="text"
                id="cityInput"
                value={city}
                onChange={(e) => setCity(e.target.value)} // Add onChange handler to update city state
            />

            
            <h2>Weather in {weatherData.name}, {weatherData.sys.country}</h2>
           
            <p>Temperature: {weatherData.main.temp}°K</p>
            <p>Weather: {weatherData.weather[0].description}</p>
        </div>
    );
}

export default Weather;
