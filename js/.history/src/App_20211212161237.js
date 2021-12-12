import logo from "./logo.svg";
import "./App.css";
import ListEmployee from "./components/ListEmployee";
import React, { useState, useEffect } from "react";
import EmployeeService from "./services/EmployeeService";

function App() {
  const [employees, setEmployees] = useState([]);

  return (
    <div className="container">
      <ListEmployee employees={employees} setEmployees={setEmployees} />
    </div>
  );
}

export default App;
