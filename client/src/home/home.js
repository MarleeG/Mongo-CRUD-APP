import React, { useState, useEffect } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Tasks from "./components/tasks/tasks";
import API from "../util/API";

import "./home.css";

const Home = (props) => {
  const [allTasks, setTasks] = useState([]);

  const getAllTasks = async () => {
    let tasks;
    try {
      tasks = await API.getTasks();
    } catch (err) {
      tasks = [];
    }

    setTasks(tasks);
  };

  useEffect(() => {
    getAllTasks();
  },[API]);

  return (
    <Jumbotron className="jumbotron__container center">
      <Container>
        <h1>MONGO CRUD APP</h1>
        <p>ADD DESCRIPTION HERE</p>
        <hr />
        {/* Render here */}
        <Tasks allTasks={allTasks}/>
      </Container>
    </Jumbotron>
  );
};

export default Home;
