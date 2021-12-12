import logo from "./logo.svg";
import "./App.css";
import ListEmployee from "./components/ListEmployee";
import React, { useState, useEffect } from "react";
import EmployeeService from "./services/EmployeeService";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getEmployees().then((response) => {
      setEmployees(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" exact component={<ListEmployee />}></Route>
          <Route path="/employees" exact component={<ListEmployee />}></Route>
          <ListEmployee employees={employees} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// const getEmployees = () => {
//   EmployeeService.getEmployees().then((response) => {
//     setEmployees(response.data);
//     console.log(response.data);
//   });
// };
