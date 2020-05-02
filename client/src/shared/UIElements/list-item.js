import React from "react";
import { ListGroup } from "react-bootstrap";

const ListItem = (props) => {
return <ListGroup.Item action={props.act}>{props.text}</ListGroup.Item>;
};

export default ListItem;
