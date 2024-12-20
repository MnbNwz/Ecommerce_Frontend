import React from "react";
import { createBrowserRouter, Route } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
