import "./App.css";
import Title from "./components/Title";
import React, { useState, useEffect } from "react";
import EmployeeService from "./services/EmployeeService";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";
import NewEventForm from "./components/NewEventForm";
import Notification from "./components/Notification";

function App() {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);
  const [notification, setNotification] = useState({
    message: null,
    type: null,
  });
  useEffect(() => {
    EmployeeService.getAll().then((response) => {
      setEmployees(response);
      console.log(response.data);
    });
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleCreateEmployee = async (newEmployee) => {
    const response = await EmployeeService.create(newEmployee);
    setEmployees(employees.concat(response));
    setNotification({
      message: `Employee: ${response.firstName}, ${response.lastName} added`,
      type: "notification",
    });
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Title employees={employees} />} />
          {/* <Route path="/" element={<CreateEmployee employees={employees} />} /> */}

          {/* <Route path="/employees" exact component={ListEmployee}></Route> */}
          {/* <ListEmployee employees={employees} /> */}
        </Routes>
        {showModal && (
          // <Modal>
          <NewEventForm
            createEmployee={handleCreateEmployee}
            handleClose={handleClose}
          />

          // </Modal>
        )}
        <Notification message={notification.message} type={notification.type} />
        <button
          className="btn btn-outline-primary"
          onClick={() => setShowModal(true)}
        >
          Add Employee
        </button>
      </div>
    </Router>
  );
}

export default App;

// const getEmployees = () => {
//   EmployeeService.getEmployees().then((response) => {
//     setEmployees(response.data);
//     console.log(response.data);
//   });
// };
