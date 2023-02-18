import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered === true ? (
        <Form userIsReg={userIsRegistered} />
      ) : (
        <Form userIsReg={userIsRegistered} />
      )}
    </div>
  );
}

export default App;
