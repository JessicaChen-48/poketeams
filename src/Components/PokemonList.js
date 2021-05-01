import { useEffect } from "react";
import PokemonCard from "./PokemonCard"

function PokemonList({pokes, types, setLoading}) {

  useEffect(() =>
    setLoading(false)
  ,) 

  return (
    <div>
    {pokes.map(poke => <PokemonCard key={poke.pokemon.name} pokeType={types} poke={poke} setLoading={setLoading}/>)}
    </div>
  )

}

export default PokemonList;