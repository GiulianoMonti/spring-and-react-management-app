import logo from "./logo.svg";
import "./App.css";
import ListEmployee from "./components/ListEmployee";
import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeService from "./services/EmployeeService";
function App() {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    EmployeeService.getEmployees().then((response) => {
      setEmployees(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className="container">
      <ListEmployee employees={employees} />
    </div>
  );
}

export default App;