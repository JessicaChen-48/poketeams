import {useEffect, useState} from "react"
import './App.css';
import getTypes from "./ApiCalls/getTypes"
import Select from "./Components/Select"
import PokemonList from "./Components/PokemonList"
import Loader from "./Components/Loader"

function App() {
  const initState = []
  const [types, setTypes] = useState(initState)
  const [pokes, setPokes] = useState(initState)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(function getTypeOnRender() {
    async function callGetTypes() {
      let res = await getTypes();
      res.splice(-2)
      setTypes(res)
      setIsLoading(false)
    }
    callGetTypes()
  }, [])

  function changePokes(pokes) {
    setPokes(pokes)
  }

  const setLoading = bool => setIsLoading(bool)


  if (isLoading) return "loading ..."

  return (
    <>
      <Select changePokes={changePokes} types={types} setLoading={setLoading}/>
      <PokemonList pokes={pokes} types={types} setLoading={setLoading}/>
    </>
  );
}

export default App;
