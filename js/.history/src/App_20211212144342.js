import logo from "./logo.svg";
import "./App.css";
import ListEmployee from "./components/ListEmployee";

const [employees, setEmployees] = useState("http://localhost:3000/trips");

function App() {
  return (
    <div className="container">
      <ListEmployee />
    </div>
  );
}

export default App;
