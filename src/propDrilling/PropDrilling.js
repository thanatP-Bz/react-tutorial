import React, { useState } from "react";
import Data from "../Data";
const PropDrilling = () => {
  const [people, setPeople] = useState(Data);
  return (
    <section>
      <h3>props driling</h3>
      <List people={people} />
    </section>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <SingerPerson key={person.id}></SingerPerson>;
      })}
    </>
  );
};

const SingerPerson = ({ id, name }) => {
  return (
    <div className="item">
      <h4>single person</h4>
    </div>
  );
};

export default PropDrilling;
