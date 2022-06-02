import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "/Users/beckynewton/Desktop/react-games/animal/src/Pages/Welcome/welcome.js";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Homepage} />
    </Router>
  );
}

export default App;
