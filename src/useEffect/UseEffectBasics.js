import React, { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const clickHandler = () => {
    setValue((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    console.log("use effect");
    if (value > 0) {
      document.title = `New Messages (${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("use second effect");
    if (value > 0) {
      document.title = `New Messages (${value})`;
    }
  });

  useEffect(() => {
    console.log("hello world");
  }, []);

  return (
    <div className="container">
      <h2>{value}</h2>
      <button className="btn" onClick={clickHandler}>
        Click
      </button>
    </div>
  );
};

export default UseEffectBasics;
