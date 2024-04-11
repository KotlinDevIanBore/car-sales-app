import React from "react";
// import { Button } from "carbon-components-react";
// import sportsCar from "./home-page-images/pexels-sarmad-mughal-305070.jpg"
import { useState, useEffect, useRef } from "react";
import CARS from "../Data";
import "./view-car.css";

import { BrowserRouter as Router, Route, useParams } from "react-router-dom";

function DisplayCar(props) {
  const [imageIndex, setimageIndex] = useState(1);
  function handleImageChange(direction) {
    setimageIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      const lastIndex = props.car.image.length - 1;
      if (newIndex < 0) {
        return lastIndex;
      } else if (newIndex > lastIndex) {
        return 0;
      } else {
        return newIndex;
      }
    });
  }
  return (
    <div className="display-car-page">
      <div className="image-info-container">
        <div className="image-container">
          <img
            className="hero-image"
            src={props.car.image[imageIndex].URL}
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

          <button
            className="change-image-button-minus"
            onClick={() => {
              handleImageChange(-1);
            }}
          >
            Change Image-
          </button>
          <button
            className="change-image-button-plus"
            onClick={() => {
              handleImageChange(1);
            }}
          >
            Change Image +
          </button>
        </div>
        <div className="info-container">
        <ol class="gradient-list">
          
    <li>{props.car.name}</li>
    <li>Aenean tincidunt elit at ipsum cursus, vitae interdum nulla suscipit.</li>
    <li>Curabitur in orci vel risus facilisis accumsan.</li>
    <li>Morbi eleifend tortor lacinia sapien sagittis, quis pellentesque felis egestas.</li>
    <li>Aenean viverra dui quis leo lacinia fringilla.</li>
    <li>Sed varius lectus ac condimentum egestas.</li>
    <li>Maecenas faucibus lorem nec lorem posuere, a rhoncus velit porttitor.</li>
    <li>Proin porta arcu ac elit malesuada pulvinar.</li>
    <li>Phasellus vitae felis sit amet mi gravida volutpat.</li>
    <li>Curabitur vulputate urna non efficitur interdum.</li>
    <li>{props.car.price}</li>
    <li>{props.car.availability}</li>
    <li>{props.car.location}</li>
   
    
    
  </ol>
        </div>
      </div>
    </div>
  );
}

export default DisplayCar;
