
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



const WeatherComponent = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        console.log("lat", lat);
        console.log("long", long);
      });

      await fetch(
        `${apiURL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${apiKey}`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            // Aggiunge della tolleranza per cercare la città più vicina
            const nearbyLat = lat + 0.02;
            const nearbyLong = long + 0.02;

            return fetch(
              `${apiURL}/weather/?lat=${nearbyLat}&lon=${nearbyLong}&units=metric&APPID=${apiKey}`
            ).then((res) => res.json());
          }
        })
        .then((result) => {
          setData(result);
          console.log(result);


            if (data.weather[0].description.toLowerCase().includes("sun")) {
                const cardElement = document.querySelector('.card');
                if (cardElement) {
                  cardElement.style.backgroundImage = 'url("https://images.pexels.com/photos/952632/pexels-photo-952632.jpeg?auto=compress&cs=tinysrgb&w=600")';
                }
              }
              if (data.weather[0].description.toLowerCase().includes("cloud")) {
                const cardElement = document.querySelector('.card');
                if (cardElement) {
                  cardElement.style.backgroundImage = 'url("https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
                }
              }
              if (data.weather[0].description.toLowerCase().includes("rain")) {
                const cardElement = document.querySelector('.card');
                if (cardElement) {
                  cardElement.style.backgroundImage = 'url("https://images.pexels.com/photos/166360/pexels-photo-166360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
                }
              }
              if (data.weather[0].description.toLowerCase().includes("snow")) {
                const cardElement = document.querySelector('.card');
                if (cardElement) {
                  cardElement.style.backgroundImage = 'url("https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg?auto=compress&cs=tinysrgb&w=600")';
                }
              }
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
      <div className="card p-3">
        {" "}
        {/* Added padding */}
        {data.name ? (
          <>
            <h2 className="text-center mt-3 mb-0">{data.name}</h2>{" "}
            {/* Centered heading */}
            <p className="text-center mb-0">
              {" "}
              {/* Centered paragraph */}
              {data.weather[0].description.replace(/\b\w/g, (char) =>
                char.toUpperCase()
              )}
            </p>
            <h1 className="text-center mt-3">
              {" "}
              {/* Centered large font */}
              {data.main.temp}&#176;
            </h1>
            <p className="text-center mb-0">{currentTime}</p>{" "}
            {/* Centered time */}
            <p className="text-center mb-4">
              {currentDayOfWeek}, {currentDayOfMonth} {currentMonthName}{" "}
              {currentYear}
            </p>
          </>
        ) : (
          <p className="text-center">
            Non sono stati ricevuti dati della tua posizione corrente, prova a ricaricare la pagina
          </p>
        )}
      </div>
    </div>
  );
};

export default WeatherComponent;
