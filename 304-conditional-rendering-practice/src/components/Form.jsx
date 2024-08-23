import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type={props.type} placeholder={props.type} />
      <input type={props.password} placeholder={props.password} />
      <input type={props.password} placeholder={props.password} />
      <button type="submit">Register</button>
    </form>
  );
}

export default Form;
