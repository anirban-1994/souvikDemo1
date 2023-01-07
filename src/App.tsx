import React from "react";
import "./App.css";
import { Header } from "./src/Components/Header";

function App() {
  return (
    <div className="flex flex-col  w-screen h-screen bg-slate-300 items-center">
      <Header />
    </div>
  );
}

export default App;
