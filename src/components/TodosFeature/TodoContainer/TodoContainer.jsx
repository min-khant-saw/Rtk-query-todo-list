import React from "react";
import "./TodoContainer.css";

const TodoContainer = (props) => {
  return <div className="container todo-container">{props.children}</div>;
};

export default TodoContainer;
