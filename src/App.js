import CarGrid from "./Car-grid-component";
import "./App.css";
import CARS from "./Data.js"
import HomePage from "./home-page/home-component.jsx";


function App(props) {
  return (

    <>

<HomePage/>

<CarGrid cars={CARS} />
    
    </>

   
    
  );
}

export default App;
