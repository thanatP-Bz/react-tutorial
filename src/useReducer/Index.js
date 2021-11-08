import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import Data from "../Data";
// reducer function

const reducer = (state, action) => {};

const defaultState = {
  people: Data,
  isModalOpen: true,
  modalContent: "Hello world",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (name) {
    } else {
    }
  };
  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}

      <form onSubmit={handlerSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          add
        </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
