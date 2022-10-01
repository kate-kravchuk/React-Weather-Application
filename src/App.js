import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <button className="btn btn-primary">Hello</button>
      <p>
        This project is coded by{" "}
        <a href="http://localhost:3000/">Kateryna Kravchuk</a> and is
        <a
          href="https://github.com/kate-kravchuk/React-Weather-Application"
          target="_blank"
        >
          {" "}
          open-sourced on GitHub
        </a>
      </p>
    </div>
  );
}

export default App;
