import FormattedDate from "./FormattedDate";
import React from "react";

export default function WeatherInfo(props){
  return (
    <div className="WeatherInfo">
      <div>
        <h4>
          <button className="GeoTagButton" type="submit" id="geoLocation">
          <span roll="img">📍</span>
          </button>
          <strong id="currentLocation" className="currentLocation">
            Melbourne
          </strong>{" "}
          | <span id="dateTime"><FormattedDate date={props.data.date} /> </span>
        </h4>
      </div>
        
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
                  {Math.round(props.data.temperature)}
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
                Feels like <strong id="feelsLike">{Math.round(props.data.feelsLike)}</strong>°
                <br />
                <br />
                <strong id="tempMax">{props.data.tempMax}</strong>° Max |{" "}
                <span id="tempMin">{props.data.tempMin}</span>
                ° Overnight Min
                <br />
                <br />
                <strong id="windSpeed">{Math.round(props.data.windSpeed)}</strong>km/h Wind
                <br />
                <strong id="tempHumidity">{props.data.tempHumidity}</strong>% Humidity
                <br />
                <strong id="description">{props.data.description}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}