import React from "react";
import butterfly from "../../butterfly.svg";
import { Link } from "react-router-dom";
import "./main.css";

function Main() {
  document.title = "Home";
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Choose your Animal</h1>
        <Link to="/interactive">
          <div className="Butterfly-wrapper">
            <img src={butterfly} className="App-logo" alt="butterfly" />
          </div>
        </Link>
      </header>
    </div>
  );
}

export default Main;
