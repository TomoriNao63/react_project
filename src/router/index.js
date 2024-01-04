import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "../views/index";
import LoginIndex from "../views/LoginIndex.jsx";
import UserIndex from "../views/user/index.jsx";
import AdminIndex from "../views/admin/index.jsx";
import NotFound from "../views/NotFound";
import Reg from "../views/Reg";
import Password from "../views/user/Password";
import UserInfo from "../views/user/UserInfo";
import Login from "../views/Login.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },

  {
    path: "/login",
    element: <LoginIndex />,
    children: [
      {
        path: "",
        element: (
          <>
            <Login />
          </>
        ),
      },
      {
        path: "reg",
        element: (
          <>
            <Reg />
          </>
        ),
      },
    ],
  },
  {
    path: "/reg",
    element: <Reg />,
  },
  {
    path: "/user",
    element: <UserIndex />,
    children: [
      {
        path: "home",
        element: <UserInfo />,
      },
      { path: "password", element: <Password /> },
    ],
  },

  {
    path: "/admin",
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
