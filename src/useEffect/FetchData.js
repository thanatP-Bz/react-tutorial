import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [data, setData] = useState([]);

  const listData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    listData();
  }, []);

  return (
    <>
      {data.map((info) => {
        const { id, login } = info;
        return (
          <div key={id}>
            <h1>{login}</h1>
          </div>
        );
      })}
    </>
  );
};

export default FetchData;
