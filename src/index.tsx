import React from "react";
import ReactDOM from "react-dom";
import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./Router";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
