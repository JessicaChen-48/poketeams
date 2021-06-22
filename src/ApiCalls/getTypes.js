import axios from "axios"
/**
 * This function populates the drop-down menu of all the Pokemon types
 * 
 * @returns string[]
 * The strings are the names of the types ["normal", "fighting", etc]
 * 
 */
async function getTypes() {
  let res = await axios.get("https://pokeapi.co/api/v2/type")
  let types = res.data.results.map(t => t.name)
  return types
}

export default getTypes;