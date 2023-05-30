import React from "react";
import Weather from "./Weather.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Planner</h1>
        <Weather defaultLocation="Tokyo" />
      </div>
      <p className="text-center">
        Project is coded and{" "}
        <a
          href="https://github.com/misskatiemarple/weather-react2"
          target="_blank"
          rel="noreferrer"
        >
          open sourced
        </a>{" "}
        by Katie Marple
      </p>
    </div>
  );
}

export default App;
