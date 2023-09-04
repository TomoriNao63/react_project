import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./api/axios.js";
import Header from "./views/commons/Header";
import Login from "./views/Login";
import Body from "./views/commons/Body";
import User from "./views/user/Home";
import Admin from "./views/admin/home";
import NotFound from "./views/NotFound";
import Reg from "./views/Reg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
  },
  {
    path: "/zixun",
    element: (
      <>
        <Header />
      </>
    ),
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
    element: (
      <>
        <Header />
        <User />
      </>
    ),
  },
  {
    path: "/admin/home",
    element: <Admin />,
  },
  {
    path: "/root/test",
    element: <>root test</>,
  },
  {
    path: "/notFound",
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
