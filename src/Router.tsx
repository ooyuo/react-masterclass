import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";
import ErrorComponent from "./componenets/ErrorComponent";
import NotFound from "./screens/NotFound";
import User from "./screens/Users/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      { path: "about", element: <About /> },
      {
        path: "users/:userId",
        element: <User />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
