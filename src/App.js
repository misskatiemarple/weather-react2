import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <p>
          Project is coded and{" "}
          <a
            href="https://github.com/misskatiemarple/weather-react2"
            target="_blank"
          >
            open sourced
          </a>{" "}
          by Katie Marple
        </p>
      </div>
    </div>
  );
}
