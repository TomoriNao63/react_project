import { createBrowserRouter, Navigate } from "react-router-dom";

import LoginIndex from "../views/LoginIndex.jsx";
import UserIndex from "../views/user/index.jsx";
import AdminIndex from "../views/admin/index.jsx";
import NotFound from "../views/NotFound.jsx";
import Reg from "../views/Reg.jsx";
import Password from "../views/user/Password.jsx";
import UserInfo from "../views/user/UserInfo.jsx";

import React from "react";
import Index from "../views/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginIndex />,
  },
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "user",
        element: <></>,
      },
    ],
  },
]);
// {
//   path: "/login",
//   element: <LoginIndex />,
//   children: [
//     {
//       path: "",
//       element: (
//         <>
//           <Login />
//         </>
//       ),
//     },
//     {
//       path: "reg",
//       element: (
//         <>
//           <Reg />
//         </>
//       ),
//     },
//   ],
// },
// {
//   path: "/reg",
//   element: <Reg />,
// },
// {
//   path: "/user",
//   element: <UserIndex />,
//   children: [
//     {
//       path: "home",
//       element: <UserInfo />,
//     },
//     { path: "password", element: <Password /> },
//   ],
// },

// {
//   path: "/admin",
//   element: <AdminIndex />,
// },
// {
//   path: "/root/test",
//   element: <>root test</>,
// },
// {
//   path: "*",
//   element: <NotFound />,
// },
