import React from "react";
import "./bars.css";

function Bars(props) {
  console.log(props.index);
  console.log(props.boolean);

  return (
    <div
      id={props.index}
      style={{
        height: `${props.value}%`,
        minwidth: "5px",
        backgroundColor: `${props.boolean ? "red" : "grey"}`,
        marginRight: "5px",
        marginLeft: "5px",
      }}
    >
      <h1>{props.value}</h1>
    </div>
  );
}

export default Bars;
