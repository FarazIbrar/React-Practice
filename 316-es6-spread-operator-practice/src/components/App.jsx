import React, { useState } from "react";

function ChangeState() {
  const [list, setList] = useState({
    item: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setList((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
}

function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" />
        <button onClick={setList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
