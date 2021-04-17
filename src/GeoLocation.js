import React from "react";

export default function GeoLocation(){
//   function retrievePosition(position) {
//   console.log(position);
//   let latitude = position.coords.latitude;
//   let longitude = position.coords.longitude;
//   let units = "metric";
//   let apiKey = "31856a05b9b062fb137620991f56055f";
//   let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
//   let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

//   axios.get(apiUrl).then(showTemperature);
// }

// function getPosition(event) {
//   event.preventDefault();
//   navigator.geolocation.getCurrentPosition(retrievePosition);
// }

// let geoLocationButton = document.querySelector("#geoLocation");
// geoLocationButton.addEventListener("click", getPosition);

  return (
    <button className="GeoTagButton" type="submit">
      <span roll="img">📍</span>
    </button>
  );
}
