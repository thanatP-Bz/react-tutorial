import React, { useReducer } from "react";

const reducer = () => {}

const initValue = {count: 0, name: ''};
const Count = () => {
  const [state, dispatch] = useReducer(reducer, initValue)
  return  (
  <>
  <button onclick={}>-</button>
  <button onClick={}>+</button>
  <button onClick={}>click</button>
  </>
  )
};

export default Count;
