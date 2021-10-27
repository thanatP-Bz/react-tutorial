import React, { useState } from "react";

const UseStateBasic = () => {
  const [title, setTitle] = useState("hi");

  const clickHandler = () => {
    if (title === "hi") {
      setTitle("good bye");
    } else {
      setTitle("hi");
    }
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button onClick={clickHandler}>Click</button>
    </React.Fragment>
  );
};

export default UseStateBasic;
