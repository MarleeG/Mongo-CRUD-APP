import React, { Fragment } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import ListItem from "../../../shared/UIElements/list-item";

const Tasks = (props) => {
  // console.log(props.allTasks);
  // if (props.allTasks.data) {
  //   console.log(props.allTasks.data.tasks);
  // }
  return (
    <Fragment>
      {props.allTasks.hasOwnProperty("data") && (
        <Row>
          <Col lg={6}>
            <h3>Tasks</h3>
            {/* unfulfilled items */}

            {/* {
              props.allTasks.data.tasks
            } */}
            <ListGroup>
              {props.allTasks &&
                props.allTasks.data.tasks
                  .filter((tsk) => tsk.fulfilled === false)
                  .map((tsk, idx) => {
                    return (
                      <ListItem text={tsk.task} key={tsk._id} act={true} />
                    );
                  })}
            </ListGroup>
          </Col>
          <Col lg={6}>
            <h3>Complete</h3>
            {/* fulfilled items */}
            <ListGroup>
              {props.allTasks &&
                props.allTasks.data.tasks
                  .filter((tsk) => tsk.fulfilled === true)
                  .map(tsk => {
                    return (
                      <ListItem text={tsk.task} key={tsk._id} act={false} />
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
