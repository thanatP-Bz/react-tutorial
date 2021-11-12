import React, { useState } from "react";
import Data from "../Data";
const PropDrilling = () => {
  const [people, setPeople] = useState(Data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <section>
      <h3>props driling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SingerPerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          ></SingerPerson>
        );
      })}
    </>
  );
};

const SingerPerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default PropDrilling;
