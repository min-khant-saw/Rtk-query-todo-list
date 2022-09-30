import React from "react";

const JsonView = (props) => {
  return (
    <div className="json-view d-flex justify-content-center align-items-center w-100 flex-column p-5 position-relative">
      <div className="pos">
        <h3 className="text-light text-center">Json View</h3>
        {props.jsonId.map((result) => {
          return (
            <div key={result.id} className="bg-dark p-3 text-light">
              {"{"}
              <h5>
                {" "}
                <span className="text-info">"id"</span> :{" "}
                <span className="text-warning">"{result.id}"</span> ,
              </h5>
              <h5>
                {" "}
                <span className="text-info">"name"</span> :{" "}
                <span className="text-warning">"{result.name}"</span> ,
              </h5>
              <h5>
                {" "}
                <span className="text-info">"email"</span> :{" "}
                <span className="text-warning">"{result.email}"</span> ,
              </h5>
              <h5>
                {" "}
                <span className="text-info">"uidKey"</span> :{" "}
                <span className="text-warning">"{result.uidKey}"</span> ,
              </h5>
              <h5>
                {" "}
                <span className="text-info">"time"</span> :{" "}
                <span className="text-warning">"{result.time}"</span> ,
              </h5>
              <h5>
                <span className="text-info">"editTime"</span> :{" "}
                <span className="text-warning">"{result.editTime}"</span> ,
              </h5>
              {"}"}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JsonView;
