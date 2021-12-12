import logo from "./logo.svg";
import "./App.css";
import ListEmployee from "./components/ListEmployee";
import { useState, useEffect, useRef } from "react";

function App() {
  const [employees, setEmployees] = useState("http://localhost:3000/trips");

  return (
    <div className="container">
      <ListEmployee />
    </div>
  );
}

export default App;
