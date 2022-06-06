import React, { useEffect } from "react";
import butterfly from "../../butterfly.svg";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import pizza from "../../pizza.svg";
import banana from "../../banana.svg";
import strawberry from "../../strawberry.svg";
import "../../Components/form/form";

import "./playtime.css";

function Interactive({ props }) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {}, []);

  document.title = "Home";
  return (
    <div className="App">
      <header className="header">
        <h1 className="App-title">Time to Play{}</h1>
        <div className="Butterfly-wrapper">
          <img src={butterfly} className="App-logo" alt="butterfly" />
        </div>
        <div>happy: {count}</div>
        <h1>Feed {props} pet to make them happy</h1>
      </header>
      <div>
        <div
          onClick={() => {
            incrementCount();
          }}
        >
          <DndProvider backend={HTML5Backend}>
            <div className="parent">
              <div className="div1">
                <div className="draggable" draggable="true">
                  <img
                    onClick={() => {
                      incrementCount();
                    }}
                    src={pizza}
                    className="pizza"
                    alt="pizza"
                  />
                </div>
              </div>

              <div className="div2">
                <div className="draggable" draggable="true">
                  <img
                    onClick={() => {
                      incrementCount();
                    }}
                    src={strawberry}
                    className="pizza"
                    alt="strawberry"
                  />
                </div>
              </div>

              <div className="div3">
                <div className="draggable" draggable="true">
                  <img
                    onClick={() => {
                      incrementCount();
                    }}
                    src={banana}
                    className="pizza"
                    alt="banana"
                  />
                </div>
              </div>

              <div className="div4">
                <div className="draggable" draggable="true">
                  <img
                    onClick={() => {
                      incrementCount();
                    }}
                    src={pizza}
                    className="pizza"
                    alt="pizza"
                  />
                </div>
              </div>

              <div className="div5">
                <div className="draggable" draggable="true"></div>
                <img
                  onClick={() => {
                    incrementCount();
                  }}
                  src={pizza}
                  className="pizza"
                  alt="pizza"
                />
              </div>
            </div>
          </DndProvider>
        </div>
      </div>
    </div>
  );
}

export default Interactive;
