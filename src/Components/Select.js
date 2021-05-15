import getPokes from "../ApiCalls/getPokes";

function Select({types, changePokes, setLoading, setCurrType}) {

  async function handleChange(e) {
    setLoading(true)
    let pokeType = e.target.value;
    let res = await getPokes(pokeType)
    setLoading(false)
    setCurrType(pokeType)
    changePokes(res)
  }

  return (
    <select className="select" onChange={handleChange} name="types" id="types">
      <option>Select a Type</option>
      {types.map((type, i) =>
      <option key={i+1} value={i+1}>{type.slice(0, 1).toUpperCase() + type.substr(1, type.length)}</option>)}
    </select>
  )
}

export default Select;