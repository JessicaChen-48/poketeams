import ball from "./pokeball_PNG8.png"
import {useState} from "react"
import getPoke from "../ApiCalls/getPoke";
import PokemonCard from "./PokemonCard"
import "./Pokeball.css"

function Pokeball({idx, key, pokeType, poke}) {
  const [ballOrPoke, setBallOrPoke] = useState("ball")

  function clickHandler(e) {
    let currBall = e.target;
    setBallOrPoke("poke")
    console.log(ballOrPoke)
  }


  if (ballOrPoke === "ball") {
  return (
      <img alt="pokeball" className="ballRows" src={ball} onClick={clickHandler} />
  )
  } else {
    return (<PokemonCard key={key} pokeType={pokeType} poke={poke}/>)
  }
  
}

export default Pokeball;