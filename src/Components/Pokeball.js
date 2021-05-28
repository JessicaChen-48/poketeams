import ball from "./pokeball_PNG8.png";
import { useState } from "react";
import PokemonCard from "./PokemonCard";
import "./Pokeball.css";

function Pokeball({ pokeType, poke }) {
  const [ballOrPoke, setBallOrPoke] = useState("ball");

  function clickHandler() {
    setBallOrPoke("poke");
  }

  if (ballOrPoke === "ball") {
    return (
      <img
        alt="pokeball"
        className="ballRows"
        src={ball}
        onClick={clickHandler}
      />
    );
  } else {
    return <PokemonCard pokeType={pokeType} poke={poke} ballOrPoke={ballOrPoke}/>;
  }
}

export default Pokeball;
