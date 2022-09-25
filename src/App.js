import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchData, selector } from "./components/store";

const App = () => {
  const dispatch = useDispatch();
  const select = useSelector(selector.selectAll);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div>
      {select.map((user) => (
        <span
          onClick={() =>
            dispatch(deleteData(user.id)).then((id) =>
              alert(`this ${id.payload} request id is : "${id.meta.requestId}"`)
            )
          }
          key={user.id}
          className="d-block"
        >
          {user.id} {user.name}
        </span>
      ))}
    </div>
  );
};

export default App;
