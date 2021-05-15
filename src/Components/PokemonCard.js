import { useEffect, useState } from "react";
import getPoke from "../ApiCalls/getPoke";
import "./PokemonCard.css"

function PokemonCard({ poke, pokeType }) {

  const [newPoke, setNewPoke] = useState({
    name: "",
    sprite: "",
    flavorText: "",
  });


  const { pokemon } = poke;
  const { url } = pokemon;

  const id = pokemon.url.split("/")[6];
  const flavorTextUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}`;

  useEffect(
    function getPokeInfo() {
      async function callGetPoke() {
        let res = await getPoke(flavorTextUrl, url);
        setNewPoke(res);
      }
      callGetPoke();
    },
    [pokeType]
  );


  const { name, sprite, flavorText } = newPoke;

  return (
    <>
      <div className="card">
        <img src={`${sprite}`} alt={`${name}`} className="card-img-top"></img>
          <h5 className="card-title">
            {name.slice(0, 1).toUpperCase() + name.substr(1, name.length)}
          </h5>
          <p className="card-text">{flavorText}</p>
      </div>
    </>
  );
}

export default PokemonCard;
