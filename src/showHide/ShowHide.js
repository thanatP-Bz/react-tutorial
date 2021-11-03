import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  const buttonHandler = () => setShow(!show);
  return (
    <>
      <button className="btn" onClick={buttonHandler}>
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>size: {size} </h2>
    </div>
  );
};

export default ShowHide;
