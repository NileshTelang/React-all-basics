import React from "react";
import Input from "../components/Input";

function Form(props) {
  return (
    <form className="form">
      <Input Type="text" Placeholder="Username" />
      <Input Type="Password" Placeholder="Password" />
      {props.userIsReg === false && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">
        {props.userIsReg === true ? <p>Login</p> : <p>Register</p>}
      </button>
    </form>
  );
}

export default Form;
