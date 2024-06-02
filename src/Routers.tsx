import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";

function Routers() {
  return (
    <Routes>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Routes>
  );
}

export default Routers;
