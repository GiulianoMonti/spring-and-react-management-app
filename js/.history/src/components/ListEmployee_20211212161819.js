import axios from "axios";

export default function ListEmployee({ employees, setEmployees }) {
  const getEmployees = () => {
    axios.get().then((response) => {
      setEmployees(response.data);
      console.log(response.data);
    });
  };
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
