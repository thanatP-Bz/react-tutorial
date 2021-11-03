import React, { useState } from "react";

function App() {
  const [text, setText] = useState(false);
  const handler = () => {
    setText(!text);
  };
  return (
    <div className="container">
      <h1>{text}</h1>
      {text && "hello"}
      <button className="btn" onClick={handler}>
        click
      </button>
    </div>
  );
}

export default App;
