import React from "react";
import UseStateArray from "./useState/UseStateArray";

const numbers = [2, -100, 29, -47];

const flitered = numbers.filter((num) => num < 0);
console.log(flitered);
function App() {
  return (
    <div className="container">
      <UseStateArray />
    </div>
  );
}

export default App;
