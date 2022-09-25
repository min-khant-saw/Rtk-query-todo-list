import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selector } from "./components/store";

const App = () => {
  const state = useSelector((state) => state);
  useEffect(() => {
    console.log(state);
  }, []);
  return <div>{selector(state, state)}</div>;
};

export default App;
