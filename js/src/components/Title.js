import "./Title.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Title({ employees, subtitle }) {
  return (
    <div>
      <h2 className="text-center">Empleados List</h2>
      <div className="row"></div>
      <table className="table">
        <tr>
          <th> Employee Id</th>
          <th> Employee First Name</th>
          <th> Employee Last</th>
          <th> Employee Email</th>
        </tr>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td> {employee.id}</td>
              <td> {employee.firstName}</td>
              <td> {employee.lastName}</td>
              <td> {employee.emailId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
