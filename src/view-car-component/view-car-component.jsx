import React from 'react'
// import { Button } from "carbon-components-react";
// import sportsCar from "./home-page-images/pexels-sarmad-mughal-305070.jpg"
import { useState, useEffect, useRef } from "react";
import CARS from "../Data";
import Audi from "../home-page/home-page-images/vintage-porsche.jpg"
import "./view-car.css"


import { BrowserRouter as Router, Route, useParams } from 'react-router-dom';

function DisplayCar(props) {
  return (
    <div className='display-car-page'>
      <div className='image-info-container'>

        <div className='image-container'>
          <img className='hero-image' src={Audi} alt="Audi 9" />
        </div>
        <div className='info-container'> 

        <div>Land Rover Discovery </div>
        <div>Land Rover Discovery {props.name}</div>
        <div>Land Rover Discovery {props.name}</div>
        <div>Land Rover Discovery {props.name}</div>
        <div>Land Rover Discovery {props.name}</div>
        <div>Land Rover Discovery {props.name}</div>
        <div>Land Rover Discovery {props.name}</div>
        <div>Land Rover Discovery {props.name}</div>
        <div>Land Rover Discovery {props.name}</div>
        <div>Land Rover Discovery {props.name}</div>
        <div>Land Rover Discovery {props.name}</div>
        <div>Land Rover Discovery {props.name}</div>
        <div>Land Rover Discovery {props.name}</div>

        



        </div>
      </div>
    </div>
  );
}


export default DisplayCar;



