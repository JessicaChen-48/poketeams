import { useEffect } from "react";
import "./PokemonCard.css"
import Pokeball from "./Pokeball"

function PokemonList({pokes, types, setLoading}) {

  useEffect(() =>
    setLoading(false)
  ,) 

  return (
    <div className="pokes">
      {pokes.map((p,i) => <Pokeball key={p.pokemon.name} pokeType={types} poke={p}/>)}
    </div>
  )
  
}

export default PokemonList;