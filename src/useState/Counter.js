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

  const complexHandler = () => {
    setTimeout(() => {
      setCounter((prevCount) => {
        return prevCount + 1;
      });
    }, 2000);
  };
  return (
    <React.Fragment>
      <main>
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
      </main>

      <div className="container">
        <h2 className="container">complex counter</h2>
        <button className="btn" onClick={complexHandler}>
          click
        </button>
      </div>
    </React.Fragment>
  );
};

export default Counter;
