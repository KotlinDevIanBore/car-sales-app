import "./App.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// import { Button } from 'carbon-components-react';

function CarGrid(props) {
  const [carArray, SetCar] = useState(props.cars);

  const [imageIndex, SetIndex] = useState(0);
  const carGridRef = useRef();

  function changeImageIndex(buttonId, direction) {
    console.log(`Button id: ${buttonId}`);
    const updatedCars = props.cars.map((car) => {
      if (car.id === buttonId) {
        SetIndex((prevIndex) => {
          const newIndex = prevIndex + direction;
          return (newIndex + car.image.length) % car.image.length;
        });
        return { ...car, imageIndex: imageIndex.toString() }; // Update the imageIndex property
      } else {
        return car;
      }
    });
    SetCar(updatedCars);
  }

  return (
    <div ref={carGridRef}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <nav className="top-navigation"> Navigation Bar</nav>
      <div className="grid">
        {carArray.map((car) => {
          return (
            <div>
              <div
                data-card-id={car.id}
                className="car-container div-2"
                key={car.name}
              >
                <div className="arrow-image-container">
                  {" "}
                  <img
                    className="car-image"
                    src={car.image[car.imageIndex].URL} // Accessing URL property
                    alt=""
                  />
                  <div
                    className="forward-arrow-container"
                    onClick={() => {
                      changeImageIndex(car.id, 1);
                    }}
                  >
                    {" "}
                    <span class="material-symbols-outlined forward-arrow">
                      navigate_next
                    </span>
                  </div>
                  <Link 
                  // to={`/view-car/${car.name} `} 
                  to={`/view-car`} 
                  onClick={()=>{props.GetCarfromGrid(car); console.log('works')}}

                  // target="_blank"
                  >
                    <div className="middle-arrow-container" ></div>
                  </Link>
                  <div
                    className="back-arrow-container"
                    onClick={() => {
                      changeImageIndex(car.id, -1);
                    }}
                  >
                    <span class="material-symbols-outlined back-arrow">
                      navigate_before
                    </span>
                  </div>
                </div>

                <div className="car-name">{car.name}</div>
                <div className="car-price">{car.price}</div>

                <button className="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="home-button"
        onClick={() => {
          props.sayHi("Hello");
        }}
      >
        Home
      </button>
    </div>
  );
}

export default CarGrid;
