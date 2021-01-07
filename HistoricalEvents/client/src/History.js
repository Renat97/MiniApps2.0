import React from "react";

var History = (props) => {
  if (!props.description) {
    return null;
  }
  return (
    <div>
      {props.description.map((description, key) => {
        return (
          <div className="description">
            <h4>{description.date}</h4>
            <h4>{description.description}</h4>
            <h4>{description.lang}</h4>
            <h4>{description.category1}</h4>
            <h4>{description.category2}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default History;
