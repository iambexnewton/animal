import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/welcome/welcome.js";
import Main from "./pages/main/main.js";
import Interactive from "./pages/interactive/playtime.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/interactive" element={<Interactive />} />
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
