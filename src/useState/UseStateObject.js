import React, { useState } from "react";

const UseStateObject = () => {
  const [value, setValue] = useState({
    name: "Mike",
    age: 34,
    message: "Hi",
  });

  const changeHandler = () => {
    setValue({ ...value, message: "good bye", age: 23 });
  };
  return (
    <React.Fragment>
      <p>{value.name}</p>
      <p>{value.age}</p>
      <p>{value.message}</p>
      <button onClick={changeHandler}>Change</button>
    </React.Fragment>
  );
};

export default UseStateObject;
