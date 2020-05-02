import React, { useState, useEffect, Fragment } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Tasks from "./components/tasks/tasks";
import ReactBootButton from "../shared/UIElements/button";
import ReactBootAlert from "../shared/UIElements/alert";

import API from "../util/API";

import "./home.css";
import ReactBootModal from "../shared/UIElements/modal";

const Home = (props) => {
  const [allTasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [addingTask, updateAddingTask] = useState("");
  const [appAlert, updateAppAlert] = useState({ show: false });

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleInputChange = (e) => {
    let { value } = e.target;

    // value.trim()
    // [name](value);
    updateAddingTask(value);

    // console.log("name: ", name);
    // console.log("value: ", addingTask);
  };

  const addTask = async () => {
    console.log("addingTask ", addingTask);
    let add = {task: addingTask};

    try{
        await API.createTask(add);
    }catch(err){
        throw err;
    }


    updateAddingTask("");
    updateAppAlert({ show: true, variant: "success", text: "Task Added!" });
    hideAlert();


  };

  const hideAlert = () => {
    setTimeout(() => {
      updateAppAlert({ show: false });
    }, 4000);
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
          <p>ADD DESCRIPTION HERE</p>
          <ReactBootAlert
            show={appAlert.show}
            variant={appAlert.variant}
            text={appAlert.text}
          />
          <hr />
          {/* Render here */}
          <Tasks allTasks={allTasks} />

          <ReactBootButton onClick={handleShowModal} />
        </Container>
      </Jumbotron>
    </Fragment>
  );
};

export default Home;
