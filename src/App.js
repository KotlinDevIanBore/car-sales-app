import logo from "./logo.svg";
import discoveryImage from "./car-pictures/discovery-front.jpg"
import crownImage from "./car-pictures/Toyota-Crown.jpg"
import q7Image from "./car-pictures/q7-image.jpeg"
import pradoImage from "./car-pictures/prado-image.jpg"
import rxImage from "./car-pictures/rx-image.jpeg"
import evoqueImage from "./car-pictures/evoque-image.jpg"
import e350 from "./car-pictures/e350-image.jpg"
import axela from "./car-pictures/axela-image.jpg"
import "./App.css";

function App() {
  return (
    <div> 

      <nav className="top-navigation"> Navigation Bar</nav>
      
      <div className="grid">

      <div className="car-container div-1">

        <img
          className="car-image"
          src= {discoveryImage} 
          alt=""
        />

        <div className="car-name">LandRover Discovery</div>
        <div className="car-price">ksh 5000000</div>
      </div>

      
      
      <div className="car-container div-2"> <img
          className="car-image"
          src= {crownImage} 
          alt=""
        />

        <div className="car-name">Toyota crown</div>
        <div className="car-price">ksh 1999999</div> </div>


      <div className="car-container div-1"> <img
          className="car-image"
          src= {q7Image} 
          alt=""
        />

        <div className="car-name">Audi q7</div>
        <div className="car-price">ksh 5000000</div>
        
         </div>
      <div className="car-container div-2"> <img
          className="car-image"
          src= {pradoImage} 
          alt=""
        />

        <div className="car-name">LandCruiser Prado </div>
        <div className="car-price">ksh 5000000</div> </div>
      <div className="car-container div-2"> <img
          className="car-image"
          src= {rxImage} 
          alt=""
        />

        <div className="car-name">Lexus RX 450h</div>
        <div className="car-price">ksh 5000000</div> </div>
      <div className="car-container div-1"> <img
          className="car-image"
          src= {evoqueImage} 
          alt=""
        />

        <div className="car-name">Range rover Evoque</div>
        <div className="car-price">ksh 5000000</div> </div>
      <div className="car-container div-2"> <img
          className="car-image"
          src= {e350} 
          alt=""
        />

        <div className="car-name">Mercedes E350</div>
        <div className="car-price">ksh 5000000</div></div>
      <div className="car-container div-1"> <img
          className="car-image"
          src= {axela} 
          alt=""
        />

        <div className="car-name"> Axela</div>
        <div className="car-price">ksh 5000000</div> </div>



      
    </div>

    </div>
    
  );
}

export default App;
