import axios from "axios"

async function getTypePokes(id) {
  let res = await axios.get(`https://pokeapi.co/api/v2/type/${id}`)
  let pokeArr = res.data.pokemon

  let pokes = []
  while (pokes.length < 6) {
    let poke = pokeArr[Math.floor(Math.random()*pokeArr.length)]
    if (poke.pokemon.url.split("/")[6] < 10000)
      if (!pokes.includes(poke)) {
      pokes.push(poke)
    }
  }
  
  return pokes
}

export default getTypePokes;