import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "bootstrap/dist/css/bootstrap.css";
import "./Weatherinfo.css";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.location}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize mb-3">{props.data.description}</li>
          </ul>
          <div className="d-flex todays-temperature">
            <div>
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>
            <div className="currentTemperature">
              <WeatherTemperature celsius={props.data.temperature} />
              <ul>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind Speed: {props.data.wind}km/h</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="outfit col-6">
          <div className="card mt-3">
            <div className="card-header">
              <p>
                <span>
                  <li className="text-capitalize text-center">
                    What to wear today?
                  </li>
                </span>
              </p>
            </div>
            <div className="card-body">
              <p className="card-text text-center">
                It's Springtime, wear a dress and cardigan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
