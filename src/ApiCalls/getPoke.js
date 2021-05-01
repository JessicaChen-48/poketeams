import axios from "axios"

async function getPoke(flavorUrl, url) {

  let res = await axios.get(url)
  let flavorRes = await axios.get(flavorUrl)
  let name = res.data.name
  let sprite = res.data.sprites.front_default

  let enFlavorArr = flavorRes.data.flavor_text_entries.filter(e => e.language.name === "en")
  let flavorVal = enFlavorArr[Math.floor(Math.random()*enFlavorArr.length)]
  let flavorText = flavorVal.flavor_text

  return {
    name,
    sprite,
    flavorText
  }
}

export default getPoke;