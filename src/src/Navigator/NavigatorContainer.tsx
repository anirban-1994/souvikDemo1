import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "../Pages/About/About";
import { Home } from "../Pages/Home/Home";
import { pAboutUs } from "../Utils/constants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: pAboutUs,
    element: <About />,
  },
]);
export const NavigatorContainer = () => {
  return <RouterProvider router={router} />;
};
