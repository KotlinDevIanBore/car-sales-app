import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div> 
      <nav className="top-navigation"> navigation</nav>
      
      <div className="grid">
      <div className="car-container div-1">
        <img
          className="car-image"
          src="/car-pictures/discovery-front.jpg"
          alt=""
        />

        <div className="car-name">LandRover Discovery</div>
        <div className="car-price">5000000</div>
      </div>

      <div className="car-container div-2"> div 2 </div>
      <div className="car-container div-1"> div 3 </div>
      <div className="car-container div-2"> div 4 </div>
      <div className="car-container div-2"> div 5 </div>
      <div className="car-container div-1"> div 6 </div>
      <div className="car-container div-2"> div 7 </div>
      <div className="car-container div-1"> div 8 </div>
    </div>

    </div>
    
  );
}

export default App;
