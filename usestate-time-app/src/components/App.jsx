import React from "react";

function App() {
  const [TIME, setTime] = React.useState("TIME");
  function getTime() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }
  setInterval(getTime, 1000);
  return (
    <div className="container">
      <h1>{TIME}</h1>

      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
