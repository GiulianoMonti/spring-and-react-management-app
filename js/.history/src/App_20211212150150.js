import logo from "./logo.svg";
import "./App.css";
import ListEmployee from "./components/ListEmployee";
const [employees, setEmployees] = useState([]);
function App() {
  return (
    <div className="container">
      <ListEmployee />
    </div>
  );
}

export default App;
