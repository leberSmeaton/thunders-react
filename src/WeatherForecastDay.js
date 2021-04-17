import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    return days[day];
  }

  return (
    <div>
      <h4 className="WeatherForecast-day">{day()}</h4>
      <div className="forecastWeatherIcon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
      </div>
    </div>
  );   
}