import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />

        <footer>
          This project is coded by{" "}
          <a href="http://localhost:3000/">Kateryna Kravchuk</a> and is
          <a
            href="https://github.com/kate-kravchuk/React-Weather-Application"
            target="_blank"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
