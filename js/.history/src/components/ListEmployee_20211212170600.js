import axios from "axios";
import { useEffect } from "react";
import EmployeeService from "../services/EmployeeService";
import { useFetch } from "../hooks/useFetch";

export default function ListEmployee() {
  const [url, setUrl] = useState("http://localhost:8080/api/v1/employees");
  const { data: employees, isPending, error } = useFetch(url, { type: "GET" });
  return (
    <div className="container">
      <h2 className="text-center">Empleados List</h2>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Employee Id</th>
              <th> Employee First Name</th>
              <th> Employee Last</th>
              <th> Employee Email</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td> {employee.id}</td>
                <td> {employee.firstName}</td>
                <td> {employee.lastName}</td>
                <td> {employee.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
