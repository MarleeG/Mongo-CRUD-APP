import React, { useRef, Fragment } from "react";
import "./styles/input.css";

const ReactBootInput = (props) => {

  return (
    <Fragment>
      <div className="my-3">
        <label>Task</label>
        <input
          placeholder={'Enter a task'}
          type="text"
          name="task-name"
          value={props.value}
          onChange={props.handleInputChange}
        />
      </div>
    </Fragment>
  );
};

export default ReactBootInput;