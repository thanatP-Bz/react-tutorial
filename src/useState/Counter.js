import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  const clear = () => {
    setCounter(0);
  };
  return (
    <React.Fragment>
      <h1 className="container">{counter}</h1>

      <button onClick={increment} className="btn">
        Increment
      </button>
      <button onClick={clear} className="btn">
        Clear
      </button>
      <button onClick={decrement} className="btn">
        Decrement
      </button>
    </React.Fragment>
  );
};

export default Counter;
