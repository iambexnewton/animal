import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/welcome/welcome.js";
import Main from "./pages/main/main.js";
import Interactive from "./pages/interactive/playtime.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Routes>
        <Route path="/Main" element={<Main />} />
      </Routes>
      <Routes>
        <Route path="/Interactive" element={<Interactive />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
