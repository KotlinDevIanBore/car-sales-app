import React, { useContext } from "react";
import { useState} from "react";
import "./view-car.css";
import UIShellHeader from "../ui-shell-app/ui-shell-header";
import { ViewCarContext } from "./view-car-context";
function DisplayCar() {
  const [imageIndex, setimageIndex] = useState(0);
  const {car} = useContext (ViewCarContext);

  const [clamp,setClamp]= useState (true)
  function handleImageChange(direction) {
    setimageIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      const lastIndex = car.image.length - 1;
      if (newIndex < 0) {
        return lastIndex;
      } else if (newIndex > lastIndex) {
        return 0;
      } else {
        return newIndex;
      }
    });
  }
  function handleClamp (){

    setClamp (!clamp)
  }
  return (
    <div className="display-car-page">
      <div className="ui-shell-header-container">
      <UIShellHeader/>
      </div>
     
      <div className="image-info-container">
        <div className="hero-image-container">
          <img
            className="hero-image"
            src={car.image[imageIndex].URL}
            alt=""
          />
          <div
            className="change-image-forward-div"
            onClick={() => {
              handleImageChange(1);
            }}
          >
            +
          </div>
          <div
            className="change-image-backward-div"
            onClick={() => {
              handleImageChange(-1);
            }}
          >
            -
          </div>

        
          
        </div>

        

       
        <div className="info-container">
  <ol className="gradient-list">
    <li
      className={`${clamp ? 'line-clamp-3' : ''} text-sm max-w-md overflow-hidden`}
      onClick={handleClamp}
    >
      <div dangerouslySetInnerHTML={{ __html: car.description }} />
    </li>
    <li onClick={handleClamp}>click for more</li>
    <li>{car.brand}</li>
    <li>{car.name}</li>
    <li>{car.price}</li>
    <li>{car.availability}</li>
    <li>Location:{car.location}</li>
  </ol>
</div>
       

      </div>
    </div>
  );
}

export default DisplayCar;
