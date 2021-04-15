import React from "react";
import BeachImage from "./BeachImage.svg"; // relative path to image
import AppContainer from "./AppContainer";
import "./Weather.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div>
        <img src={BeachImage} className="mainImage" alt={"two people on beach"} />
      </div>
      <AppContainer />
    </div>
  );
}
