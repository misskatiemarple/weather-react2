import React from "react";
import Weather from "./Weather.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">SHE LOVES TRAVEL</h1>
        <h2 className="text-center">Daily Weather App</h2>
        <Weather defaultLocation="Tokyo" />
      </div>
      <p className="text-center text-white">
        Project is coded and{" "}
        <a
          href="https://github.com/misskatiemarple/weather-react2"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          open sourced
        </a>{" "}
        by Katie Marple
      </p>
    </div>
  );
}

export default App;
