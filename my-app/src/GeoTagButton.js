import React from "react";

export default function GeoTagButton() {
  return (
    <h4>
      <button className="GeoTagButton" type="submit" id="geoLocation">
        <span roll="img">📍</span>
      </button>
      <strong id="currentLocation" className="currentLocation">
        Melbourne
      </strong>{" "}
      | <span id="dateTime">Sunday 4:49pm</span>
    </h4>
  );
}
