/* eslint-disable no-undef */
import "./App.css";

function CarGrid(props) {
    console.log (`Here ${props.cars}`)
    return (
        <div>
            <nav className="top-navigation"> Navigation Bar</nav>
      
      <div className="grid">

          {
            props.cars.map((car)=> (

                <div className="car-container div-2">
                    <img
                        className="car-image"
                        src={car.image}
                        alt=""
                    />
                    <div className="car-name">{car.name}</div>
                    <div className="car-price">{car.price}</div>
                </div>
            ))
          }  


        </div>
        </div>


    
        
    );
}

export default CarGrid;
