import React from 'react';
import {Button }from 'react-bootstrap';

const ReactBootButton = props => {
    return <Button 
        className="mt-5" 
        variant="dark" 
        size="lg" 
        onClick={() => {
            props.onClick();
        }}
        block>
            Add Task
        </Button>
}

export default ReactBootButton;