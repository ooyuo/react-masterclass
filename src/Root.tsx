import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./componenets/Header";

function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
