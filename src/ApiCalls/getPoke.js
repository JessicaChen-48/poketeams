import axios from "axios"
/**
 * 
 * This function gets information about 1 Pokemon at a time
 * 
 * @param {*} flavorUrl https://pokeapi.co/api/v2/pokemon-species/${id}
 * @param {*} url 
 * @returns {
 *            name: str,
 *            sprite: str,
 *            flavorText: str
 *          }
 */

async function getPoke(flavorUrl, url) {

  let res = await axios.get(url)
  let flavorRes = await axios.get(flavorUrl)

  // get name and picture of Pokemon
  let name = res.data.name
  let sprite = res.data.sprites.front_default


  //get only English flavor text
  let enFlavorArr = flavorRes.data.flavor_text_entries.filter(e => e.language.name === "en")
  // randomize flavor text
  let flavorVal = enFlavorArr[Math.floor(Math.random()*enFlavorArr.length)]
  let flavorText = flavorVal.flavor_text

  return {
    name,
    sprite,
    flavorText
  }
}

export default getPoke;