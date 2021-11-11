import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "decrement") {
    return { count: state.count - 1 };
  }
  if (action.type === "increment") {
    return { count: state.count + 1 };
  }
  if (action.type === "showName") {
    return { state, name: "Mike" };
  }
};

const initValue = { count: 0, name: "" };
const Count = () => {
  const [state, dispatch] = useReducer(reducer, initValue);
  return (
    <>
      <button onclick={() => dispatch({ type: "decrement" })}>-</button>
      {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <br />
      <button onClick={() => dispatch({ type: "showName" })}>click</button>
      <br />
      {state.name}
    </>
  );
};

export default Count;
