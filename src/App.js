import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchWeather from './api/fetchWeather';



function App() {

  const [weather, setWeather] = useState({});
  const fetchData = async () => {
    const data = await fetchWeather();
    setWeather(data);
  };
  fetchData();

  return (
    <div className="main-container">
        {weather.main && (
            <div className="city">
                <h2 className="city-name">
                    <span>{weather.name}</span>
                    <sup>{weather.sys.country}</sup>
                </h2>
                <div className="city-temp">
                    {Math.round(weather.main.temp-273.15)}
                    <sup>&deg;C</sup>
                </div>
                <div className="info">
                    <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                    <p>{weather.weather[0].description}</p>
                </div>
            </div>
        )}
    </div>
);
}

export default App;
