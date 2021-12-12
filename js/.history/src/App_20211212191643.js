import logo from "./logo.svg";
import "./App.css";
import ListEmployee from "./components/ListEmployee";
import React, { useState, useEffect } from "react";
import EmployeeService from "./services/EmployeeService";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Switch
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
        <Switch>
          <Route path="/" exact component={ListEmployee}></Route>
          <Route path="/employees" exact component={ListEmployee}></Route>
          <ListEmployee employees={employees} />
        </Switch>
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
