import React from "react";
import { Link } from "react-router-dom";
import butterfly from "../butterfly.svg";
import "./welcome.css";

const Hero = () => {
  document.title = "Main";
  return (
    <div className="App">
      <header className="App-header">
        <img src={butterfly} className="App-logo" alt="butterfly" />
        <h1 className="App-title">
          <Link to="/Main">Animal Party</Link>
        </h1>
      </header>
    </div>
  );
};
export default Hero;
