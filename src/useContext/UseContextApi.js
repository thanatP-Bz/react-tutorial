import React, { useState, useContext } from "react";
import Data from "../Data";

const personContext = React.createContext();
/* two conponents - provider, Consumer */

const UseContextApi = () => {
  const [people, setPeople] = useState(Data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <personContext.Provider value={{ removePerson, people }}>
      {" "}
      {/* pass as an object */}
      <h3>props driling</h3>
      <List />
    </personContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(personContext);
  return (
    <>
      {mainData.people.map((person) => {
        return <SingerPerson key={person.id} {...person}></SingerPerson>;
      })}
    </>
  );
};

const SingerPerson = ({ id, name }) => {
  /* destructuring at the prop where we want to use. Call useContext hook and pass the creatContext */
  const { removePerson } = useContext(personContext);

  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default UseContextApi;
