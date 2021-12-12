import axios from "axios";
import { useEffect } from "react";

export default function ListEmployee({ employees, setEmployees }) {
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/employees").then((res) => {
      setEmployees(res.data);
    });
  }, []);
  return (
    <div>
      <h2 className="text-center">Empleados List</h2>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thread>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Actions</th>
            </tr>
          </thread>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
