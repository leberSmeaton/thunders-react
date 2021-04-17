import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <h4 className="WeatherForecast-day">Thursday</h4>
          <div className="forecastWeatherIcon"><WeatherIcon code="01d" /></div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-min">
              12°
            </span>
            <span className="WeatherForecast-temperature-max">
              24°
            </span>
          </div>
        </div>

        <div className="col">
          <h4 className="WeatherForecast-day">Friday</h4>
          <div className="forecastWeatherIcon"><WeatherIcon code="02d" /></div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-min">
              12°
            </span>
            <span className="WeatherForecast-temperature-max">
              24°
            </span>
          </div>
        </div>

        <div className="col">
          <h4 className="WeatherForecast-day">Saturday</h4>
          <div className="forecastWeatherIcon"><WeatherIcon code="03d" /></div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-min">
              12°
            </span>
            <span className="WeatherForecast-temperature-max">
              24°
            </span>
          </div>
        </div>

        <div className="col">
          <h4 className="WeatherForecast-day">Sunday</h4>
          <div className="forecastWeatherIcon"><WeatherIcon code="04d" /></div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-min">
              12°
            </span>
            <span className="WeatherForecast-temperature-max">
              24°
            </span>
          </div>
        </div>

        <div className="col">
          <h4 className="WeatherForecast-day">Monday</h4>
          <div className="forecastWeatherIcon"><WeatherIcon code="09d" /></div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-min">
              12°
            </span>
            <span className="WeatherForecast-temperature-max">
              24°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}