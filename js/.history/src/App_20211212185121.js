import logo from "./logo.svg";
import "./App.css";
import ListEmployee from "./components/ListEmployee";
import React, { useState, useEffect } from "react";
import EmployeeService from "./services/EmployeeService";
import Header from "./components/Header";
function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getEmployees().then((response) => {
      setEmployees(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="container">
      <div></div>
      <Header />
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
