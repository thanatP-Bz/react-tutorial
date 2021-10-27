import React from "react";
import Store from "./components/Store";

const person = [
  {
    id: 1,
    name: "Jame",
    age: 24,
  },
  {
    id: 2,
    name: "Ice",
    age: 15,
  },
];

function App() {
  const clickHandler = (event) => {
    alert("trigger");
  };
  return (
    <div>
      {person.map((name) => {
        return (
          <Store key={name.id} {...name}>
            <button onClick={clickHandler}>Click</button>
          </Store>
        );
      })}
    </div>
  );
}

export default App;
