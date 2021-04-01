import React from "react";
import Search from "./Search";
import MainRow from "./MainRow";

export default function AppContainer() {
  return (
    <div className="AppContainer">
      {/*Search Row*/}
      <Search />

      {/*Main Row - with Empty and Temperature Card*/}
      <MainRow />

      {/*Fun Description Row*/}
      <h1 className="funWeatherDescription">
        Very hot! Afternoon cool change. Drink more water.
      </h1>
    </div>
  );
}
