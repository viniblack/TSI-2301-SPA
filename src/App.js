import React from "react";

function App() {
  const [pokemon, setPokemon] = React.useState({});
  const [count, setCount] = React.useState(1);

  function Proximo() {
    setCount(count + 1);
    Carregar();
  }

  function Anterior() {
    if (count >= 1) {
      setCount(count - 1);
    }
  
  }

  function Carregar() {
    console.log(count);
    fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
      .then((response) => response.json())
      .then((data) => {
        return setPokemon(data);
      });
  }

  return pokemon.sprites ? (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <img className="w-75" src={pokemon.sprites.front_default} />
        </div>

        <div className="col-5 d-flex align-items-center">
          <div className="row">
            <div className="col-5">
              <h4>Nome</h4>
              {pokemon.name}
            </div>
            <div className="col-5 ">
              <h4>Tipo</h4>
              {pokemon.types.map((data) => data.type.name)}
            </div>
            <div className="col-5 p-2">
              <h4>Comprimento</h4>
              {pokemon.height} Altura {pokemon.weight} Largura
            </div>
            <div className="col-5">
              <h4>Habilidades</h4>
              {pokemon.abilities.map((data) => (
                <div> {data.ability.name}</div>
              ))}
            </div>
            <button onClick={Anterior}>Anterior</button>
            <button onClick={Proximo}>Proximo</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <button onClick={Proximo}>Carregar</button>
    </div>
  );
}

export default App;
