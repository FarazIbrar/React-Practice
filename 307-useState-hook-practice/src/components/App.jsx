import React, { useState } from "react";

function App() {

  setInterval(currentTime, 1000);
  const [now, setCount] = useState(0);

  function currentTime(){
    const now = new Date().toLocaleTimeString();
    setCount(now)
  }

  return (
    <div className="container">
      <h1>{now}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
