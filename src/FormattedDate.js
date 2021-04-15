import react from "react";

export default function FormattedDate(todaysDate) {
  console.log(todaysDate.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let currentDay = days[todaysDate.date.getDay()];
  let currentHour = todaysDate.date.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinute = todaysDate.date.getMinutes();
  if (currentMinute < 10) {
     currentMinute = `0${currentMinute}`;
  }

  let currentTime = `${currentHour}:${currentMinute}`;

  let dateTime = document.querySelector("#dateTime");
  dateTime = `${currentDay} ${currentTime}`;

  let formattedDate = `${currentDay} ${currentTime}`;

  return (
    <div>
      {formattedDate}
    </div>
  );
}