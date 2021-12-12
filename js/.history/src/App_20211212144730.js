import logo from "./logo.svg";
import "./App.css";
import ListEmployee from "./components/ListEmployee";
import { useState, useEffect, useRef } from "react";

function App() {
  return (
    <div className="container">
      <ListEmployee />
    </div>
  );
}

export default App;
