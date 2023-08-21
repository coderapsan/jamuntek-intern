import React, { useState } from "react";
import ReactDOM from "react-dom";

const One = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [display, setDisplay] = useState(false);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleForm = (event) => {
    event.preventDefault();
    setDisplay(true);
    if(name=="" || password===""){
        setDisplay(false)
    }
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <label>
          Name:
          <input type="text" onChange={(event) => handleName(event)} />
        </label>
        <label>
          Password:
          <input type="password" onChange={(event) => handlePassword(event)} />
        </label>
        <button type="submit">Login</button>
      </form>

      {display && <h1>Your name is {name} and password is {password}</h1>}
    </div>
  );
};

export default One;
