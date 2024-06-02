import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./componenets/Header";

function Root() {
  return (
    <div>
      <Header />
      <Outlet context={{ darkMode: true }} />
    </div>
  );
}

export default Root;
