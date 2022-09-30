import React from "react";
import { useDeleteTodoMutation } from "../../Api/createApi";

const DeleteTodo = (props) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const todoDelete = () => {
    return deleteTodo(props.id);
  };
  return (
    <button className="btn btn-danger my-2" onClick={todoDelete}>
      Delete
    </button>
  );
};

export default DeleteTodo;
