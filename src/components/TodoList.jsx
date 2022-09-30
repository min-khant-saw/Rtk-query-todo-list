import React, { useEffect } from "react";
import JsonView from "./JsonView";
import DeleteTodo from "./TodosFeature/Feature/DeleteTodo";
import UpdateTodo from "./TodosFeature/Feature/UpdateTodo";

const TodoList = (props) => {
  useEffect(() => {
    props.data.filter((data) => {
      if (data.id === props.jsonId[0]?.id) {
        return props.setjsonId(() => [data]);
      }
    });
    const data = props.data.map((i) => i.id);
    if (!data.includes(props.jsonId[0]?.id)) return props.setjsonId([]);
  }, [props.data]);
  return (
    <div className="w-100 d-flex gap-5 json justify-content-center">
      <div className="left-todo rounded">
        {props.data.map((todo, i) => {
          return (
            <div
              key={i}
              className="text-light bg-dark p-2 mb-1 d-flex flex-column todos"
            >
              <h3>{todo.name}</h3>
              <h5>{todo.email}</h5>
              <span className="fw-bold text-warning opacity-50">
                {todo.uidKey}
              </span>
              <small className="d-block overflow-auto">{todo.time}</small>
              <button
                className="btn btn-primary mt-3"
                onClick={() => props.setjsonId(() => [todo])}
              >
                Json view
              </button>
              <DeleteTodo id={todo.id} />
              <UpdateTodo id={todo.id} />
            </div>
          );
        })}
      </div>
      <JsonView jsonId={props.jsonId} />
    </div>
  );
};

export default TodoList;
