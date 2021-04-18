import React from "react";

export default function GeoLocation(){
  return (
    <button className="GeoTagButton" type="submit" onClick={props.getCurrentPosition}>
      <span roll="img">📍</span>
    </button>
  );
}
