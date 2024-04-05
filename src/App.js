import CarGrid from "./Car-grid-component";
import "./App.css";
import CARS from "./Data.js"


function App(props) {
  return (
    <CarGrid cars={CARS} />
    
  );
}

export default App;
