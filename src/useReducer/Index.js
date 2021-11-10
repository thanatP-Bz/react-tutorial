import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import Data from "../Data";
// reducer function

const ACTION = {
  ADDITEM: "ADD_ITEM",
  NOVALUE: "NO-VALUE",
  CLOSEMODAL: "CLOSE_MODAL",
  REMOVEITEM: "REMOVE_ITEM",
};

const reducer = (state, action) => {
  if (action.type === ACTION.ADDITEM) {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item",
    };
  }
  if (action.type === ACTION.NOVALUE) {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "please enter the value",
    };
  }
  if (action.type === ACTION.CLOSEMODAL) {
    return { ...state, isModalOpen: false };
  }

  if (action.type === ACTION.REMOVEITEM) {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
  throw new Error("The item does not match");
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: Math.random().toString(), name };
      dispatch({ type: ACTION.ADDITEM, payload: newItem });
      setName("");
    } else {
      dispatch({ type: ACTION.NOVALUE });
    }
  };

  const closeModal = () => {
    dispatch({ type: ACTION.CLOSEMODAL });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}

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
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              className="btn"
              onClick={() =>
                dispatch({ type: ACTION.REMOVEITEM, payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
