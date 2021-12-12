import logo from "./logo.svg";
import "./App.css";
import ListEmployee from "./components/ListEmployee";
import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeService from "./services/EmployeeService";
import { useFetch } from "./hooks/useFetch";
function App() {
  const [employees, setEmployees] = useState([]);
  const [url, setUrl] = useState("http://localhost:8080/api/v1/employees");
  const { data: employees, isPending, error } = useFetch(url, { type: "GET" });

  return (
    <div className="container">
      <ListEmployee employees={employees} />
    </div>
  );
}

export default App;

// const getEmployees = () => {
//   EmployeeService.getEmployees().then((response) => {
//     setEmployees(response.data);
//     console.log(response.data);
//   });
// };
