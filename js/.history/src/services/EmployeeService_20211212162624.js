import axios from "axios";
import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }
}

export default new EmployeeService();
// const baseUrl = "http://localhost:8080/api/v1/employees";

// const getAll = () => {
//   const request = axios.get(baseUrl);
//   return request.then((response) => response.data);
// };

// const create = (newObject) => {
//   const request = axios.post(baseUrl, newObject);
//   return request.then((response) => response.data);
// };

// const update = (id, newObject) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObject);
//   return request.then((response) => response.data);
// };

// const deleteById = (id, newObject) => {
//   const request = axios.delete(`${baseUrl}/${id}`, newObject);

//   return request.then((response) => response.data);
// };

// export default {
//   getAll: getAll,
//   create: create,
//   update: update,
//   deleteById: deleteById,
// };
