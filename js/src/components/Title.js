import "./Title.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
export default function Title({
  employees,
  subtitle,
  nextLink,
  setEmployees,
  previousLink,
}) {
  // const siguientePagina = () => {
  //   const request = axios.get("http://localhost:8080" + nextLink);
  //   return request.then((response) =>
  //     setEmployees(response.data.content.content)
  //   );
  // };
  // const sumLink = () => {
  //   nextLink = nextLink.slice(0, nextLink.length - 1);
  //   nextLink = nextLink + 2;
  //   console.log(nextLink);
  // };
  // const previousPage = () => {
  //   const request = axios.get("http://localhost:8080" + previousLink);
  //   return request.then((response) =>
  //     setEmployees(response.data.content.content)
  //   );
  // };

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
      <div className="d-flex flex-end m-2">
        {/* <button
          className="btn btn-primary flex-end d-flex mx-1"
          onClick={console.log("a")}
        >
          Previous
        </button> */}
        <button
          className="btn btn-primary flex-end d-flex mx-1"
          onClick={console.log("a")}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
