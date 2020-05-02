import React, { useRef, Fragment } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

import "./styles/input.css";

const ReactBootInput = (props) => {
  //   let inputVal = useRef(null);
    console.log(props.value);

  return (
    <Fragment>
      {/* <InputGroup className="mb-3"> */}
      {/* <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Task</InputGroup.Text>
      </InputGroup.Prepend> */}
      {/* </InputGroup> */}

      <div className="my-3">
        <label>Task</label>
        <input
          //   aria-label="Task"
          // aria-describedby="inputGroup-sizing-default"
          // ref={inputVal}
          placeholder={'Enter a task'}
          type="text"
          name="task-name"
          value={props.value}
          // inputRef={ref => props.value = ref}
          onChange={props.handleInputChange}
        />
      </div>
    </Fragment>
  );
};

export default ReactBootInput;
