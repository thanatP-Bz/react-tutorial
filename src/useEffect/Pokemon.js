import React, { useEffect, useState } from "react";
import axios from "axios";

const url = " http://pokeapi.co/api/v2/pokemon/";
const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPokemon(res.data.results.map((p) => p.name)));
  }, []);

  return (
    <>
      {pokemon.map((p) => {
        const { id, name } = p;
        return <div key={id}>{p}</div>;
      })}
    </>
  );
};

export default Pokemon;
