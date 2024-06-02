import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
