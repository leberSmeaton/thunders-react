import React from "react";
import MainImage from "./MainImage";
import AppContainer from "./AppContainer";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      {/*mainImage cropped in CSS*/}
      <MainImage />
      <AppContainer />
    </div>
  );
}
