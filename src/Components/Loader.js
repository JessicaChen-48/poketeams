import "./Loader.css";
import ball from "./pokeball_PNG8.png";

function Loader() {
  return (
    <div className="container">
      <img alt="pokeball" src={ball}></img>
    </div>
  );
}

export default Loader;
