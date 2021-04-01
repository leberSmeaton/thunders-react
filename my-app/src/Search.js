import React from "react";
import SearchForm from "./SearchForm";

export default function Search() {
  return (
    <div className="Search">
      <SearchForm />

      <h4>
        <button className="GeoTagButton" type="submit" id="geoLocation">
        <span roll="img">📍</span>
        </button>
        <strong id="currentLocation" className="currentLocation">
          Melbourne
        </strong>{" "}
        | <span id="dateTime">Sunday 4:49pm</span>
      </h4>
    </div>
  );
}
