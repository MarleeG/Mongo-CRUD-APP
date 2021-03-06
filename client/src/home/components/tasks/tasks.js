import React, { Fragment } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import ListItem from "../../../shared/UIElements/list-item";

const Tasks = (props) => {
  return (
    <Fragment>
      {props.allTasks.hasOwnProperty("data") && (
        <Row>
          <Col lg={6}>
            <h3>Tasks</h3>
            <ListGroup>
              {props.allTasks &&
                props.allTasks.data.tasks
                  .filter((tsk) => tsk.fulfilled === false)
                  .map(tsk => {
                    return (
                      <ListItem text={tsk.task} key={tsk._id} act={true} id={tsk._id} update={props.updateTask}/>
                    );
                  })}
            </ListGroup>
          </Col>
          <Col lg={6}>
            <h3>Complete</h3>
            <ListGroup>
              {props.allTasks &&
                props.allTasks.data.tasks
                  .filter((tsk) => tsk.fulfilled === true)
                  .map(tsk => {
                    return (
                      <ListItem text={tsk.task} key={tsk._id} id={tsk._id} act={false} delete={props.deleteTask}/>
                    );
                  })}
            </ListGroup>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default Tasks;