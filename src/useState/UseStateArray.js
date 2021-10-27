import React, { useState } from "react";
import Data from "../Data";

const UseStateArray = () => {
  const [people, setPeople] = useState(Data);

  const deleteBtn = () => {
    if (people === Data) {
      setPeople([]);
    } else {
      setPeople(Data);
    }
  };

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={deleteBtn}>
        Delete
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
