import React from "react";
import { Modal, Button } from "react-bootstrap";
import ReactBootInput from './input';

const ReactBootModal = (props) => {
  return (
    <Modal show={props.show} onHide={()=> props.onHide()}>
      <Modal.Header closeButton>
        <Modal.Title>Add Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <ReactBootInput value={props.value} handleInputChange={props.handleInputChange}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.onHide()}>
          Close
        </Button>
        <Button variant="primary" onClick={()=> {
            props.addTask();
            props.onHide();
        }}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReactBootModal;