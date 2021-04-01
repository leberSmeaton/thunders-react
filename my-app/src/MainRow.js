import React from "react";

export default function MainRow() {
  return (
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
                <a id="celcius-link" className="active">
                  °C
                </a>{" "}
                |
                <a id="fahrenheit-link">
                  °F
                </a>
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
  );
}
