import { useEffect, useState } from "react";
import "./App.css";
import getTypes from "./ApiCalls/getTypes";
import Select from "./Components/Select";
import PokemonList from "./Components/PokemonList";
import Loader from "./Components/Loader";
import backgrounds from "./Background";
import bug from "./types_imgs/bug.png";

function App() {
  const initState = [];
  const [types, setTypes] = useState(initState);
  const [pokes, setPokes] = useState(initState);
  const [isLoading, setIsLoading] = useState(true);
  const [currType, setCurrType] = useState("");

  useEffect(function getTypeOnRender() {
    async function callGetTypes() {
      let res = await getTypes();
      res.splice(-2);
      setTypes(res);
      setIsLoading(false);
    }
    callGetTypes();
  }, []);

  function changePokes(pokes) {
    setPokes(pokes);
  }

  const setLoading = (bool) => setIsLoading(bool);

  let background = backgrounds[currType];

  if (isLoading) return <i className="fas fa-2x fa-circle-notch fa-spin"></i>;

  return (
    <>
      <div className="pokesIntro">
        <h1>Have you always wanted be a gym leader?</h1>
        <p>
          Now you can! Select a Pokemon type below & we'll make you a
          specialized team!
        </p>

        <Select
          className="select"
          changePokes={changePokes}
          types={types}
          setLoading={setLoading}
          setCurrType={setCurrType}
        />
      </div>
      <div
        className="pokesContainer"
      >
        <PokemonList pokes={pokes} types={types} setLoading={setLoading} />
      </div>
      <div className="footer" style={{ backgroundImage: `url(${background})`}}></div>
    </>
  );
}

export default App;
