import React, { useEffect, useRef } from "react";

const UseRefBasics = () => {
  const refContainer = useRef(null);

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    console.log(refContainer.current);
  });
  return (
    <>
      <form className="form" onSubmit={handlerSubmit}>
        <div>
          <input type="text" />
          <button type="submit">submit</button>
        </div>
        <div ref={refContainer}>hi</div>
      </form>
    </>
  );
};

export default UseRefBasics;
