import axios from "axios"

/**
 * When a user selects a Pokemon from the drop-down menu,
 * get a random set of 6 Pokemon of that type
 * 
 * @param {*} id num
 * @returns [{pokemon: name:str, url: str}, ...]
 */

async function getTypePokes(id) {
  let res = await axios.get(`https://pokeapi.co/api/v2/type/${id}`)

  // this is an array of all Pokemon of a specific type
  let pokeArr = res.data.pokemon

  // pokes will hold information about 6 random Pokemon
  let pokes = []

  // while there are fewer than 6 Pokemon in pokes
  while (pokes.length < 6) {

    // randomly add a Pokemon
    let poke = pokeArr[Math.floor(Math.random()*pokeArr.length)]

    // id 10000 = special Pokemon (like Gigantamax), so filter those out
    // also filter out Pokemon already in pokes array
    if (poke.pokemon.url.split("/")[6] < 10000)
      if (!pokes.includes(poke)) {
      pokes.push(poke)
    }
  }
  
  // array of objects that look like {pokemon: name: str, url: str}
  return pokes
}

export default getTypePokes;