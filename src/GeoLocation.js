import React from "react";

export default function GeoLocation(props){
  // console.log(props.getCurrentPosition); undefined? How to connect?
  return (
    <button className="GeoLocation GeoTagButton" type="submit" onClick={props.getCurrentPosition}>
      <span roll="img">📍</span>
    </button>
  );
}
