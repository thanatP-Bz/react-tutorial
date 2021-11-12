import React, { useState } from "react";
import Data from "../Data";
import { Link } from "react-router-dom";
const People = () => {
  const [people, setPeople] = useState(Data);
  return (
    <div>
      <h1>People Page</h1>
      {people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default People;
