import logo from "./logo.svg";
import "./App.css";
import ListEmployee from "./components/ListEmployee";
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    EmployeeService.getEmployees().then((response) => {
      setEmployees(response.data);
      console.log(response.data);
    });
  };

  return (
    <div className="container">
      <ListEmployee employees={employees} />
    </div>
  );
}

export default App;
