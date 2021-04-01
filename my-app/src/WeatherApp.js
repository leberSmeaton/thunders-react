import React from "react";
import BeachImage from "./BeachImage.svg"; // relative path to image
import AppContainer from "./AppContainer";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      {/*mainImage cropped in CSS*/}
      <div className="MainImage">
        <img src={BeachImage} className="mainImage" alt={"two people on beach"} />
      </div>
      <AppContainer />
    </div>
  );
}
