import FormattedDate from "./FormattedDate";
import React from "react";

export default function WeatherInfo(props){
  return (
    <div className="WeatherInfo">
      <div>
        <h4>
          <button className="GeoTagButton" type="submit">
          <span roll="img">📍</span>
          </button>
          <strong>
            {props.data.name}
          </strong>{" "}
          | <span><FormattedDate date={props.data.date} /> </span>
        </h4>
      </div>
        
      <div className="MainRow">
        <div>
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">
                <span>
                  <img
                    src="https://openweathermap.org/img/wn/01d@2x.png"
                    alt="Clear"
                    className="icon"
                  />
                </span>
                <span>
                  {Math.round(props.data.temperature)}
                </span>
                <span className="units">
                  <button className="active">
                    °C
                  </button>{" "}
                  |
                  <button>
                    °F
                  </button>
                </span>
              </h1>

              <p>
                Feels like <strong>{Math.round(props.data.feelsLike)}</strong>°
                <br />
                <br />
                <strong>{props.data.tempMax}</strong>° Max |{" "}
                <span>{props.data.tempMin}</span>
                ° Overnight Min
                <br />
                <br />
                <strong>{Math.round(props.data.windSpeed)}</strong>km/h Wind
                <br />
                <strong>{props.data.tempHumidity}</strong>% Humidity
                <br />
                <strong className="description">{props.data.description}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}