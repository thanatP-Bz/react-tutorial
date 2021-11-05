import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [people, setPeople] = useState([]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (firstName) {
      const person = { id: Math.random().toString(), firstName };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
    }
  };

  const onChangeHandler = (e) => {
    setFirstName(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handlerSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input
              type="text"
              id="name"
              name={firstName}
              value={firstName}
              onChange={onChangeHandler}
            />
          </div>
          <button className="btn" type="submit">
            add
          </button>
        </form>
        <div>
          {people.map((people) => {
            const { id, firstName } = people;
            return (
              <div key={id} className="item">
                <h4>{firstName}</h4>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default Form;
