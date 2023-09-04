import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Index() {
  const routes = createBrowserRouter([
    {
      path: "/index",
      element: (
        <>
          <Header />
          <Movies />
        </>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
}
