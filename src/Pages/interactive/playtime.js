import React from "react";
import butterfly from "../../butterfly.svg";
import Feeding from "/Users/beckynewton/Desktop/react-games/animal/src/Components/feeding/feeding.js";
import "./playtime.css";

function Interative() {
  document.title = "Home";
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feed your Animal</h1>
        <div className="Butterfly-wrapper">
          <img src={butterfly} className="App-logo" alt="butterfly" />
        </div>
      </header>

      <Feeding />
    </div>
  );
}

export default Interative;
