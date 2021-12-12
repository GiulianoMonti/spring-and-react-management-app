import axios from "axios";
import { useEffect } from "react";
import EmployeeService from "../services/EmployeeService";

export default function ListEmployee({ employees, setEmployees }) {
  return (
    <div>
      <h2 className="text-center">Empleados List</h2>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thread>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
            <th>Actions</th>
          </thread>
          <tbody>
            {employees.map((employee) => (
              <h1 key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
              </h1>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
