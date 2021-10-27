import React from "react";

const Store = (props) => {
  const { name, age, children } = props;
  return (
    <div>
      <h1>
        {name} {age}
      </h1>
      {children}
    </div>
  );
};
export default Store;
