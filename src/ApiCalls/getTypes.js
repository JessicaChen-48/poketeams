import axios from "axios"

async function getTypes() {
  let res = await axios.get("https://pokeapi.co/api/v2/type")
  let types = res.data.results.map(t => t.name)
  return types
}

export default getTypes;