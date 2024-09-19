import React, { useContext } from "react";
import { CarContext } from "../manage-car-context";
import SearchesGraph from "./searches-graph";
import "./clicked_cars.css";

const RenderMostSearchedCar = () => {
  const { mostSearchedCar } = useContext(CarContext);

  return (
    <div value="2">
      <div className="flexbox-container">
      {mostSearchedCar.map((car) => {
  console.log(` car id in rms is ${car.id}`); // Move the console.log statement here
  return (
    <div className="flexbox" key={car.id} justify="center" align="middle"> 
      <div className="flexbox-item item-1">
        <div style={{ width: "100%", height: "100%" }}>
          <p className="most-clicked-car-name">
            {car.brand} {car.name}
          </p>
          <p className="car-clicks">Searches: {car.searches}</p>
          <img className="car-image1" src={car.image[0].URL} alt="" />
        </div>
      </div>

      <SearchesGraph carID={car.id} /> 

    </div>
  );
})}
      </div>
    </div>
  );
};

export default RenderMostSearchedCar;
