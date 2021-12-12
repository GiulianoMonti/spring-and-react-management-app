import axios from "axios";
import { useEffect } from "react";
import EmployeeService from "../services/EmployeeService";

export default function ListEmployee({ employees, setEmployees }) {
  return (
    <div>
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
                    {
                        employees.map(
                                employee =>
                                <tr key = {employee.id}>
                                    <td> {employee.id }</td>
                                    <td> {employee.firstName }</td>
                                    <td> {employee.lastName }</td>    
                                    <td> {employee.email }</td>

                                </tr>

                        )
                    }

                </tbody>


            </table>

        </div>
    )
}