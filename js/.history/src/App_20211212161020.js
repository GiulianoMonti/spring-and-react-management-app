import logo from "./logo.svg";
import "./App.css";
import ListEmployee from "./components/ListEmployee";
import React, { useState, useEffect } from "react";
import EmployeeService from "./services/EmployeeService";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/persons").then((res) => {
      setPersons(res.data);
    });
  }, []);

  return (
    <div className="container">
      <ListEmployee employees={employees} />
    </div>
  );
}

export default App;
