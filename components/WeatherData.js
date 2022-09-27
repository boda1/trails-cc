import React from 'react';

const WeatherData = ({ latestRoute }) => {
    
    // weather can be any of the following values: Thunderstorm, Drizzle, Rain, Snow, Mist/Smoke/Haze/Dust/Ash/Squall/Tornado, clear, clouds 

    const currentWeather = latestRoute.weather.weather[0].description;
    const currentTemp = Math.floor(latestRoute.weather.main.temp - 273.15);
    const currentWind = Math.floor(latestRoute.weather.wind.speed);
    
    return ( 
        <div>
            <h4>Riding today?</h4>
            <ul>
                <li>{currentWeather}</li>
                <li>{currentTemp}°C</li>
                <li>{currentWind} MPH</li>
            </ul>
        </div>
    );
}
 
export default WeatherData;
