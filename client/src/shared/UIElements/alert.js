import React from "react";
import { Alert } from "react-bootstrap";

const ReactBootAlert = (props) => {
  return (
    <Alert
      variant={props.variant ? props.variant : 'dark'}
      className="text-center"
      style={props.show ? { display: "block" } : { display: "none" }}
    >
      {props.text}
    </Alert>
  );
};

export default ReactBootAlert;
