import React, { useState } from "react";

const ControlledInput = () => {
  const [firstName, setFristName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
      setFristName("");
      setEmail("");
    } else {
      console.log("else");
    }
  };
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
              value={firstName}
              onChange={(e) => {
                setFristName(e.target.value);
                console.log(firstName);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">add person</button>
        </form>
      </article>
    </>
  );
};

export default ControlledInput;
