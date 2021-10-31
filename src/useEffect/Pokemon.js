import React, { useEffect, useState } from "react";
import axios from "axios";

const url = " http://pokeapi.co/api/v2/pokemon/?limit=811";
const Pokemon = () => {
  const [pokemon, setPokemon] = useState(["ivysaur"]);

  const fetchData = async () => {
    const response = await fetch(url);
    const pokemon = await response.json();
    setPokemon(pokemon);
    console.log(pokemon);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {pokemon.map((info) => {
        const { id, name } = info;
        return <div key={id}>{name}</div>;
      })}
    </>
  );
};

export default Pokemon;
