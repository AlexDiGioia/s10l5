
import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
//installata libreria moments.js con npm install moment --save

const apiURL = "https://api.openweathermap.org/data/2.5";
const apiKey = "8fcf94bf8bdb2b5f1503c837534136ea";
const iconURL = "https://openweathermap.org/img/w";

const currentDate = new Date();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const currentMonthName = months[currentMonth - 1];
const currentTime = currentDate.toLocaleTimeString(undefined, {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
}); //oriario all'inglese


const SearchedCity = () => {

return(
  <div>
    <p>
      pagina ricerca
    </p>
  </div>
)
}

export default SearchedCity;