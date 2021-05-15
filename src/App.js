import {useEffect, useState} from "react"
import './App.css';
import getTypes from "./ApiCalls/getTypes"
import Select from "./Components/Select"
import PokemonList from "./Components/PokemonList"
import Loader from "./Components/Loader"
import background from "./background1.jpeg"

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


  if (isLoading) return <Loader/>

  return (
    <>
    <div className="pokesIntro">
    <h1>Have you always wanted to lead a Pokemon team?</h1>
    <p>Now you can! Select a Pokemon type below & we'll make you a team!</p>
    
      <Select className="select" changePokes={changePokes} types={types} setLoading={setLoading}/>
    </div>
    <div className="pokesContainer">
      <PokemonList pokes={pokes} types={types} setLoading={setLoading}/>
      </div> 

    </>
  );
}

export default App;
