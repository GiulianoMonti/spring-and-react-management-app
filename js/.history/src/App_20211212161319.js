import logo from "./logo.svg";
import "./App.css";
import ListEmployee from "./components/ListEmployee";
import React, { useState, useEffect } from "react";
import EmployeeService from "./services/EmployeeService";
import axios from "axios";
function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/employees").then((res) => {
      setEmployees(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="container">
      <ListEmployee employees={employees} />
    </div>
  );
}

export default App;
