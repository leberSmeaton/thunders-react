import React from "react";

export default function GeoLocation(props){
  return (
    <button className="GeoLocation GeoTagButton" type="submit" onClick={props.getCurrentPosition}>
      <span roll="img">📍</span>
    </button>
  );
}
