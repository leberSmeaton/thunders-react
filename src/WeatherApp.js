import React, { useState } from "react";
import axios from "axios";
import BeachImage from "./BeachImage.svg"; // relative path to image
import "./Weather.css";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      cityName: response.data.name,
      feelsLike: response.data.main.feels_like,
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
      tempHumidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: "Sunday 04.49pm"
    })
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
              <form id="search-form">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search new city"
                  id="search-text-input"
                />
                <button
                  className="btn"
                  type="submit"
                  value="Search"
                  id="button-addon1">
                  🔍
                </button>
              </form>
            </div>

            <div>
              <h4>
                <button className="GeoTagButton" type="submit" id="geoLocation">
                <span roll="img">📍</span>
                </button>
                <strong id="currentLocation" className="currentLocation">
                  Melbourne
                </strong>{" "}
                | <span id="dateTime">{weatherData.date}</span>
              </h4>
            </div>
          </div>

          {/*Main Row - with Empty and Temperature Card*/}
          <div className="MainRow">
            <div className="TemperatureCard">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">
                    <span id="currentTempWeatherIcon">
                      <img
                        src="https://openweathermap.org/img/wn/01d@2x.png"
                        alt="Clear"
                        id="icon"
                        className="icon"
                      />
                    </span>
                    <span className="temperature" id="temperature">
                      {Math.round(weatherData.temperature)}
                    </span>
                    <span className="units">
                      <button id="celcius-link" className="active">
                        °C
                      </button>{" "}
                      |
                      <button id="fahrenheit-link">
                        °F
                      </button>
                    </span>
                  </h1>

                  <p className="card-text">
                    Feels like <strong id="feelsLike">{Math.round(weatherData.feelsLike)}</strong>°
                    <br />
                    <br />
                    <strong id="tempMax">{weatherData.tempMax}</strong>° Max |{" "}
                    <span id="tempMin">{weatherData.tempMin}</span>
                    ° Overnight Min
                    <br />
                    <br />
                    <strong id="windSpeed">{Math.round(weatherData.windSpeed)}</strong>km/h Wind
                    <br />
                    <strong id="tempHumidity">{weatherData.tempHumidity}</strong>% Humidity
                    <br />
                    <strong id="description">{weatherData.description}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*Fun Description Row*/}
          <h1 className="funWeatherDescription">
            Very hot! Afternoon cool change. Drink more water.
          </h1>
        </div>
      </div>
    );
  } else {
    let units = "metric";
    let apiKey = "31856a05b9b062fb137620991f56055f";
    let cityInput = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
