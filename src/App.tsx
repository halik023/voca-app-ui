import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Kết hợp Tailwind CSS và SCSS
      </h1>
      <button className="custom-button mt-4">Click Me</button>
    </div>
  );
}

export default App;
