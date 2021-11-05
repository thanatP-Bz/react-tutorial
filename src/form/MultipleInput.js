import React, { useState } from "react";

const ControlledInput = () => {
  /*  const [firstName, setFristName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(""); */
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: Math.random.toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };
  const [people, setPeople] = useState([]);

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age:</label>
            <input
              type="age"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <h5>{email}</h5>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInput;
