import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
};

export default MultipleReturns;
