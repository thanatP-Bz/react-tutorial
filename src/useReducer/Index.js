import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { Data } from "../Data";
// reducer function

const Index = () => {
  const [people, setPeople] = useState(Data);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <Modal />}
      <form></form>
    </>
  );
};

export default Index;
