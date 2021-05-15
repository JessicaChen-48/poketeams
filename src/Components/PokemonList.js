import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard"
import "./PokemonCard.css"
import Pokeball from "./Pokeball"

function PokemonList({pokes, types, setLoading}) {

  useEffect(() =>
    setLoading(false)
  ,) 

  //    {pokes.map(poke => <PokemonCard key={poke.pokemon.name} pokeType={types} poke={poke} setLoading={setLoading}/>)}

  return (
    <div className="pokes">
      {pokes.map((p,i) => <Pokeball idx={i} key={p.pokemon.name} pokeType={types} poke={p}/>)}
    </div>
  )
  
}

export default PokemonList;