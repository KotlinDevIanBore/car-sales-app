import React from "react";
import { useContext } from "react";
import { CarContext } from "../manage-car-context";
import "./clicked_cars.css";



const RenderMostSearchedCar = ()=>{

const {mostSearchedCar} = useContext(CarContext)

    return <div value="2">
    <div className="flexbox-container ">
      {mostSearchedCar.map((car) => (
        
        <div className="flexbox" justify="center" align="middle">
          <div className="flexbox-item item-1">
            <div style={{ width: "100%", height: "100%" }}>
              <p className="most-clicked-car-name">
                {car.brand} {car.name}
              </p>
              <p className="car-clicks">Searches: {car.searches}</p>
              <img className="car-image1" src={car.image[0].URL} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
    
}

export default RenderMostSearchedCar