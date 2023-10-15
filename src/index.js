import React from "react";
import ReactDOM from "react-dom/client";

import "./api/axios.js";
import Index from "./views/index.jsx";
import Login from "./views/Login";
import UserIndex from "./views/user/index.jsx";
import AdminIndex from "./views/admin/index.jsx";
import NotFound from "./views/NotFound";
import Reg from "./views/Reg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reg",
    element: <Reg />,
  },
  {
    path: "/user/home",
    element: <UserIndex />,
  },
  {
    path: "/admin/home",
    element: <AdminIndex />,
  },
  {
    path: "/root/test",
    element: <>root test</>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
