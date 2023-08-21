import React from "react";
import { useState, useRef } from "react";
const Three = () => {
  const name = useRef(null);
  const [show,setShow]= useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.current.value===""){
        alert("enter the valid name")
    }
    else {
        setShow(true);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> First name : </label>
        <input type="text" id="name" ref={name}></input>
        <button type="submit"> Submit </button>
      </form>

          {show?<div> Your name is {name.current.value}</div>:("") }
    </div>
  );
};

export default Three;
