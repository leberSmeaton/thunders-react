import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
  return (
    <div className="WeatherInfo">
      <div>
        <h4>
          <button className="GeoTagButton" type="submit">
          <span roll="img">📍</span>
          </button>
          <span>
            {props.data.city}
          </span>
          <span className="spaceDateTime">
            |
          </span>
          <span>
            <FormattedDate date={props.data.date} />
          </span>
        </h4>
      </div>
        
      <div className="MainRow">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">
              <span className="icon">
                <WeatherIcon code={props.data.icon} />
              </span>
              {/* <span>
                {Math.round(props.data.temperature)}
              </span> */}
              <WeatherTemperature celcius={props.data.temperature} />
            </h1>

            <p>
              Feels like <strong>{Math.round(props.data.feelsLike)}</strong>°
              <br />
              <br />
              <strong>{Math.round(props.data.tempMax)}</strong>° Max |{" "}
              <span>{Math.round(props.data.tempMin)}</span>
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
  );
}