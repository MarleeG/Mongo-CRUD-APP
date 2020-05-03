import React, { useState, useEffect, Fragment } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Tasks from "./components/tasks/tasks";
import ReactBootButton from "../shared/UIElements/button";
import ReactBootAlert from "../shared/UIElements/alert";
import ReactBootModal from "../shared/UIElements/modal";

import API from "../util/API";

import "./home.css";

const Home = (props) => {
  const [allTasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [addingTask, updateAddingTask] = useState("");
  const [appAlert, updateAppAlert] = useState({ show: false });

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleInputChange = (e) => {
    let { value } = e.target;
    updateAddingTask(value);
  };

  const hideAlert = () => {
    setTimeout(() => {
      updateAppAlert({ show: false });
    }, 4000);
  };

  const updateTask = async (id) => {
    try {
      await API.completeTask(id);
    } catch (err) {
      throw err;
    }

    getAllTasks();
    updateAppAlert({ show: true, variant: "success", text: "Task Complete" });
  };

  const deleteTask = async (id) => {
    try {
      await API.deleteTask(id);
    } catch (err) {
      throw err;
    }

    getAllTasks();
    updateAppAlert({ show: true, variant: "success", text: "Task Deleted" });
  };

  const addTask = async () => {
    console.log("addingTask ", addingTask);
    let add = { task: addingTask };

    try {
      await API.createTask(add);
    } catch (err) {
      throw err;
    }
    updateAddingTask("");

    getAllTasks();
    updateAppAlert({ show: true, variant: "success", text: "Task Added!" });
    hideAlert();
  };

  const getAllTasks = async () => {
    let tasks;
    try {
      tasks = await API.getTasks();
    } catch (err) {
      tasks = [];
      throw err;
    }
    setTasks(tasks);
  };

  useEffect(() => {
    getAllTasks();
  }, [API]);

  return (
    <Fragment>
      <ReactBootModal
        show={showModal}
        onHide={handleCloseModal}
        value={addingTask}
        handleInputChange={handleInputChange}
        addTask={addTask}
      />
      <Jumbotron className="jumbotron__container center">
        <Container>
          <h1>MONGO CRUD APP</h1>
          <p>
            This application is a to do list built with React, Mongoose, MongoDB
            Atlas, JavaScript & more!
          </p>
          <ReactBootAlert
            show={appAlert.show}
            variant={appAlert.variant}
            text={appAlert.text}
          />
          <hr />
          {/* Render here */}
          <Tasks
            allTasks={allTasks}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />

          <ReactBootButton onClick={handleShowModal} />
        </Container>
      </Jumbotron>
    </Fragment>
  );
};

export default Home;