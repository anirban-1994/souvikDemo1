import React from "react";
import "./App.css";
import { Header } from "./src/Components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { pAboutUs, pProducts, pService } from "./src/Utils/constants";
import { About } from "./src/Pages/About/About";
import { Service } from "./src/Pages/Service/Service";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <About />,
//   },
//   {
//     path: pService,
//     element: <Service />,
//   },
// ]);

function App() {
  return (
    <div className="flex flex-col  w-screen h-screen bg-slate-300 items-center">
      <Header />
      <Routes>
        <Route  path="/" element={<About/>}/>
        <Route  path={pService} element={<Service/>}/>
      </Routes>
    </div>
  );
}

export default App;
