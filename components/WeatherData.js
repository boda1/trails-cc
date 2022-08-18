import React from 'react';

const WeatherData = ({ latestRoute }) => {
    
    // weather can be any of the following values: Thunderstorm, Drizzle, Rain, Snow, Mist/Smoke/Haze/Dust/Ash/Squall/Tornado, clear, clouds 

    const currentWeather = latestRoute.weather.weather[0].main;
    const currentTemp = Math.floor(latestRoute.weather.main.temp - 273.15);
    
    return ( 
        <div>
            <div>Weather data: {currentWeather}</div>
            <div>Temperature: {currentTemp}</div>
        </div>
    );
}
 
export default WeatherData;
