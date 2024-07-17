import React from "react";
import "./comparison.css";
import { carGridContext } from "../car-grid-component/car-grid-context";
import { useContext } from "react";
function RenderComparison() {
  const { comparisonArray, SetComparisonArray } = useContext(carGridContext);




  function changeImageIndex(buttonId, direction) {
    const updatedCars = comparisonArray.map((car) => {
      if (car.id === buttonId) {
        const newIndex =
          (car.imageIndex + direction + car.image.length) % car.image.length;
        return { ...car, imageIndex: newIndex };
      } else {
        return car;
      }
    });
    SetComparisonArray(updatedCars);
  }

  console.log (`this is the number of cars in array ${JSON.stringify(comparisonArray.length)}`)


  return (
    <>
      <div > 
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
          {comparisonArray.map((car) => (
            <div className="card div-2">
              <div className="arrow-image-container">

                <img
                  className="car-image"
                  src={car.image[car.imageIndex].URL}
                  alt=""
                />
                <div
                  className="forward-arrow-container"
                  onClick={() => changeImageIndex(car.id, 1)}
                >
                  <span className="material-symbols-outlined forward-arrow">
                    navigate_next
                  </span>
                </div>

                <div
                  className="back-arrow-container"
                  onClick={() => changeImageIndex(car.id, -1)}
                >
                  <span className="material-symbols-outlined back-arrow">
                    navigate_before
                  </span>
                </div>
              </div>

              <div className="car-name">
                {car.brand} {car.name}
              </div>
              <div className="car-price">{car.price}</div>
              <div className="car-price">{car.location}</div>
              <div className="car-price">{car.availability}</div>


              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RenderComparison;
