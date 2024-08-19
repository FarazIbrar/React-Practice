import React from "react";
import ReactDOM from "react-dom";

const name = "Faraz"

ReactDOM.render(
  <div>
    <h1>Hi {name}</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
