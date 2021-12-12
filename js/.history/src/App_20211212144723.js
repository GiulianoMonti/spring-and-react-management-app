import logo from "./logo.svg";
import "./App.css";
import ListEmployee from "./components/ListEmployee";
import { useState, useEffect, useRef } from "react";

function App() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: employees, isPending, error } = useFetch(url, { type: "GET" });

  return (
    <div className="container">
      <ListEmployee />
    </div>
  );
}

export default App;
