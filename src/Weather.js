import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>New York</h1>
      <ul>
        <li>Saturday, 7:00</li>
        <li>Raining</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt="Raining"
          ></img>
          6°C
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}
