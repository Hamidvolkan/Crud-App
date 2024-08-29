import React from "react";
import Create from "./create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Update from "./Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
