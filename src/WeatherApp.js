import React, { useState } from "react";
import axios from "axios";
import BeachImage from "./BeachImage.svg"; // relative path to image
import "./Weather.css";

export default function WeatherApp() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
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
                | <span id="dateTime">Sunday 4:49pm</span>
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
                      {" "}
                      38{" "}
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
                    Feels like <strong id="feelsLike">32</strong>°
                    <br />
                    <br />
                    <strong id="tempMax">41</strong>° Max |{" "}
                    <span id="tempMin">17</span>
                    ° Overnight Min
                    <br />
                    <br />
                    <strong id="windSpeed">20</strong>km/h Wind
                    <br />
                    <strong id="tempHumidity">95</strong>% Humidity
                    <br />
                    <strong id="description">Sunny</strong>
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
