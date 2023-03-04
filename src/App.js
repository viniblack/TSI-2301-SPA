import React, { useEffect } from "react";
import Pokemon from "./components/poke";
import Button from "./components/button";

function App() {
  const [pokemon, setPokemon] = React.useState({});
  const [count, setCount] = React.useState();

  function Proximo() {
    // console.log(count);
    if(count)
      setCount(count + 1);
    else
      setCount(1);
  }

  function Anterior() {
    if (count >= 1) {
      setCount(count - 1);
    }
  }
  function Carregar() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setPokemon(data);
      });
  }

  useEffect(() => {
    if(count)
      Carregar();
  }, [count]);

  return pokemon.sprites ? (
    <div className="container">
      <Pokemon
        image={pokemon.sprites.front_default}
        name={pokemon.name}
        type={pokemon.types}
        height={pokemon.height}
        weight={pokemon.weight}
        abilities={pokemon.abilities}
      />
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <Button
            class={"btn btn-danger mx-3"}
            name={"Anterior"}
            click={Anterior}
          />
          <Button
            class={"btn btn-success mx-3"}
            name={"Proximo"}
            click={Proximo}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="container ">
      <div className="row">
        <div className="col-12  d-flex flex-column align-items-center">
          <h1>Pokédex</h1>
          <p className="py-3 fs-3">
            Clique em carregar para ver o primeiro pokémon da lista
          </p>
        </div>
        <div className="col-12 d-flex flex-column align-items-center">
          <img
            alt="pikachu correndo"
            className="p-3"
            src="https://media.tenor.com/uUNcnHwYJQEAAAAj/running-pikachu-transparent-snivee.gif"
          />
          <button className="btn btn-success" onClick={Proximo}>
            Carregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
