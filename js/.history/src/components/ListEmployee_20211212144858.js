import React, { Component } from "react";
import { useState, useEffect, useRef, useFetch } from "react";

export default function ListEmployee() {
  const [url, setUrl] = useState("http://localhost:8080/api/v1/employees");
  const { data: employees, isPending, error } = useFetch(url, { type: "GET" });
  return (
    <div>
      <div>
        <h2 className="text-center">Emplyees List</h2>
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
    </div>
  );
}
