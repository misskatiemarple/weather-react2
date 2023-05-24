import React from "react";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>Last updated:</li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex todays-temperature">
            <img src={props.data.icon} alt={props.data.description} />
            <div className="currentTemperature">
              <ul>
                <li>Temperature: {Math.round(props.data.temperature)}</li>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </ul>
            </div>
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind Speed: {props.data.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="outfit col-6">
        <div className="card">
          <div className="card-header">
            <p>
              <span>
                <li>Description: {props.data.description}</li>
              </span>
            </p>
          </div>
          <div className="card-body">
            <p className="card-text">
              It's Springtime, wear a dress and cardigan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
