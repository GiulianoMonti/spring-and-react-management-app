import logo from "./logo.svg";
import "./App.css";
import ListEmployee from "./components/ListEmployee";
import React, { useState, useEffect } from "react";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/persons").then((res) => {
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
