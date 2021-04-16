import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import BeachImage from "./BeachImage.svg"; // relative path to image
import "./Weather.css";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      feelsLike: response.data.main.feels_like,
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
      tempHumidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000)
    })
  }

  function search(){
    let units = "metric";
    let apiKey = "31856a05b9b062fb137620991f56055f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event){
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <div>
          <img src={BeachImage} className="mainImage" alt={"two people on beach"} />
        </div>
        
        <div className="AppContainer">
          <div className="Search">
            <div className="SearchForm">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search new city"
                  onChange={handleCityChange}
                />
                <button
                  className="btn"
                  type="submit"
                  value="Search">
                  🔍
                </button>
              </form>
            </div>
          </div>

          <WeatherInfo data={weatherData} />

          {/*Fun Description Row*/}
          <h1 className="funWeatherDescription">
            Very hot! Afternoon cool change. Drink more water.
          </h1>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
