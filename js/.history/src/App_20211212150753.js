import logo from "./logo.svg";
import "./App.css";
import ListEmployee from "./components/ListEmployee";
import React, { useState, useEffect } from "react";

function App() {
  const [employees, setEmployees] = useState([]);

  return (
    <div className="container">
      <ListEmployee employees={employees} />
    </div>
  );
}

export default App;
