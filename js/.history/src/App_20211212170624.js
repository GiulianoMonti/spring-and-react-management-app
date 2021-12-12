import logo from "./logo.svg";
import "./App.css";
import ListEmployee from "./components/ListEmployee";
import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeService from "./services/EmployeeService";
function App() {
  // const [employees, setEmployees] = useState([]);

  return (
    <div className="container">
      <ListEmployee />
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
