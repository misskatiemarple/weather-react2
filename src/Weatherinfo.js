import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "bootstrap/dist/css/bootstrap.css";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <h1 className="mt-2">{props.data.location}</h1>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
          <div className="d-flex todays-temperature mt-4 mb-4">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
            <div className="currentTemperature">
              <WeatherTemperature celsius={props.data.temperature} />{" "}
            </div>
          </div>
        </div>

        <div className="col-6 mt-5 mb-4">
          <ul>
            <li className="text-capitalize text-end">
              {props.data.description}
            </li>
            <li className="text-end">Humidity: {props.data.humidity}%</li>
            <li className="text-end">Wind Speed: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
