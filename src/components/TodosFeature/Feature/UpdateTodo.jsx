import React, { useReducer, useState } from "react";
import { useUpdateTodoMutation } from "../../Api/createApi";
import "./TodoFeature.css";

const reducer = (edited, action) => {
  switch (action.type) {
    case "edit-name":
      return {
        ...edited,
        name: action.payload.name,
      };
    case "edit-email":
      return {
        ...edited,
        email: action.payload.email,
      };
    case "edited":
      return { name: "", email: "" };
    default:
      return edited;
  }
};

const UpdateTodo = (props) => {
  const [edited, dispatch] = useReducer(reducer, { name: "", email: "" });
  const [height, setHeight] = useState(false);

  const [update] = useUpdateTodoMutation();

  let edit = `mt-2 d-flex flex-column gap-2 edit ${height ? "edit-open" : ""}`;

  const editName = (e) =>
    dispatch({ type: "edit-name", payload: { name: e.target.value.trim() } });
  const editEmail = (e) =>
    dispatch({ type: "edit-email", payload: { email: e.target.value.trim() } });

  const submitEditValue = (e) => {
    e.preventDefault();
    if (!edited.name || !edited.email) return;
    const data = update({
      id: props.id,
      name: edited.name,
      email: edited.email,
      editTime: new Date().toLocaleString(),
    });
    dispatch({ type: "edited" });
    return JSON.stringify(data);
  };

  return (
    <>
      <button
        className="btn btn-warning"
        onClick={() => setHeight((prev) => !prev)}
      >
        Edit Todo
      </button>
      <form className={edit} onSubmit={(e) => submitEditValue(e)}>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name"
            autoComplete="off"
            value={edited.name}
            onChange={(e) => editName(e)}
          />
          <label htmlFor="floatingInput" className="text-muted">
            Edit Name
          </label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="email"
            autoComplete="off"
            value={edited.email}
            onChange={(e) => editEmail(e)}
          />
          <label htmlFor="floatingInput" className="text-muted">
            Edit Email
          </label>
        </div>
        <button className="btn btn-success" type="submit">
          Edited
        </button>
      </form>
    </>
  );
};

export default UpdateTodo;
