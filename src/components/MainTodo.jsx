import React, { useState, useEffect } from "react";
import { useGetTodoQuery } from "./Api/createApi";
import TodoList from "./TodoList";
import AddTodo from "./TodosFeature/Feature/AddTodo";
import TodoContainer from "./TodosFeature/TodoContainer/TodoContainer";

const MainTodo = () => {
  const [jsonId, setjsonId] = useState([]);
  const { data, isError, isSuccess, isLoading } = useGetTodoQuery({
    refetchOnReconnect: true,
  });

  return (
    <TodoContainer>
      <AddTodo />
      {isError ? (
        <h2>Error</h2>
      ) : isLoading ? (
        <h2>loading...</h2>
      ) : isSuccess ? (
        <TodoList data={data} jsonId={jsonId} setjsonId={setjsonId} />
      ) : null}
    </TodoContainer>
  );
};

export default MainTodo;
