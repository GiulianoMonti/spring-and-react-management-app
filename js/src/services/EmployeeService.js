import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1/employees";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};
const getPage = () => {
  const request = axios.get("http://localhost:8080/api/v1/page");
  return request.then((response) => response.data);
};

const create = async (newBlog) => {
  const response = await axios.post(baseUrl, newBlog);
  return response.data;
};

export default { getAll, create, getPage }; // const baseUrl = "http://localhost:8080/api/v1/employees";

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
