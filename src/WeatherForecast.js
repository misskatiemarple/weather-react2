import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiURL).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d " size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">20°</span>
            <span className="WeatherForecast-temperature-min">28°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
