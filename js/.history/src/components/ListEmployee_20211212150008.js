import React, { Component } from "react";
rfc_;
export default function ListEmployee() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    getEmployees();
  }, []);
  return (
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
            {this.state.employees.map((employee) => (
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
