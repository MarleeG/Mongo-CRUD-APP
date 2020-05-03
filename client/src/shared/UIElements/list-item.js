import React from "react";
import { ListGroup } from "react-bootstrap";

const ListItem = (props) => {
  return (
    <ListGroup.Item action={props.act}>
      {!props.act ? (
        <span>
          <i className="trash alternate outline icon" onClick={() => props.delete(props.id)}></i>{" "}
          <i className="check circle outline icon"></i>
        </span>
      ) : (
        <i className="circle outline icon" onClick={() => props.update(props.id)}></i>
      )}
      {props.text}
    </ListGroup.Item>
  );
};

export default ListItem;
