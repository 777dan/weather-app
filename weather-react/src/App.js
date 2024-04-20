import React, { useState } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header.jsx";
import moment from 'moment';

const api = {
  key: "61c63db5fa2ca95ac40f2f62dd6c747e",
  base: "http://api.openweathermap.org/data/2.5/",
  icon: "https://openweathermap.org/img/w",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});


  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };


  return (
    <div className="container">
      <Header className="jumbotron alert bg-warning" />
      <div className="row">
        <div className="col-md-4 col-sm-12 my-3">
          Today: {moment().format("dddd")} {moment().format("LL")}
        </div>
      </div>
      <div className="row">
        <div className="search-panel col-sm-12  col-md-4 my-3">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyDown={search}
          />
        </div>
      </div>


      {typeof weather.main != "undefined" ? (
        <div className="row">
          <div className="search-panel col-md-4 col-sm-12 my-3">
            <div className="card">
              <div className="card-header bg-primary text-white pt-3">
                <h2>
                  {console.log(weather)}
                  {weather.name}, {weather.sys.country}
                </h2>
              </div>
              <div className="card-body bg-warning">
                <div className="temp">
                  <h3>{Math.round(weather.main.temp)}°c</h3>
                  <h6>Feels like {Math.round(weather.main.feels_like)}°c</h6>
                </div>
                <div className="weather">{weather.weather[0].main}</div>
                <p className="card-text">{weather.weather[0].description}</p>
                <p className="wind-speed">Wind speed: {weather.wind.speed} km/h</p>
                <div id="icon">
                  <img
                    src={`${api.icon}/${weather.weather[0].icon}.png`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}


export default App;
