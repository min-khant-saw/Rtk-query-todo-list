import { nanoid } from "@reduxjs/toolkit";
import React, { useReducer } from "react";
import { useAddTodoMutation } from "../../Api/createApi";

const reducer = (todo, action) => {
  switch (action.type) {
    case "add-todo-name":
      return { ...todo, name: action.payload.name };
    case "add-todo-email":
      return { ...todo, email: action.payload.email };
    case "added-todo":
      return { name: "", email: "" };
    default:
      return todo;
  }
};

const AddTodo = () => {
  const [todo, dispatch] = useReducer(reducer, { name: "", email: "" });

  const [createTodo] = useAddTodoMutation();

  const addTodoInputName = (e) => {
    let value = e.target.value.trim();
    dispatch({ type: "add-todo-name", payload: { name: value } });
  };

  const addTodoInputEmail = (e) => {
    let value = e.target.value.trim();
    dispatch({ type: "add-todo-email", payload: { email: value } });
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (!todo.name || !todo.email) return;
    const data = createTodo({
      id: nanoid(Number()),
      name: todo.name,
      email: todo.email,
      uidKey: nanoid(10),
      time: new Date().toLocaleString(),
      editTime: "",
    });
    dispatch({ type: "added-todo" });
    return JSON.stringify(data);
  };

  return (
    <form className="input-group mb-3 pt-2" onSubmit={(e) => addTodo(e)}>
      <input
        type="text"
        className="form-control"
        placeholder="Todo Name"
        aria-label="Todo Name"
        aria-describedby="button-addon2"
        onChange={(e) => addTodoInputName(e)}
        value={todo.name || ""}
        maxLength="20"
      />
      <input
        type="text"
        className="form-control"
        placeholder="Todo Email"
        aria-label="Todo Email"
        aria-describedby="button-addon2"
        onChange={(e) => addTodoInputEmail(e)}
        value={todo.email || ""}
      />
      <button className="btn btn-light" type="submit" id="button-addon2">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
