import React, { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setError] = useState(false);
  /*  const firstValue = text || "hello world";
  const secondValue = text && "hello world"; */
  const clickHandler = () => {
    setError(!isError);
  };
  return (
    <>
      {/*   <h1>{firstValue}</h1>
      <h1> value {secondValue}</h1> */}
      {/*  <h1>{text || "jame"}</h1>
      <h1>{!text && "Mike"}</h1> */}
      <button className="btn" onClick={clickHandler}>
        Click
      </button>
      {isError || "hello world"}
      {isError && <h1>Error...</h1>}
      {isError ? "true" : "false"}
    </>
  );
};

export default ShortCircuit;
