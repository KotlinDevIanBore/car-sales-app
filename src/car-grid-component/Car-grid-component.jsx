
import "./car-grid-component.css";
import React, { useState, useEffect, memo, useContext } from "react";
import { Link } from "react-router-dom";
import fetchData from "./car-grid-component-resource";
import { carGridContext } from "./car-grid-context";
import { searchContext } from "../home-page/home_page_context";

function CarGrid(props) {
  const { carArray, SetCar, carGridRef,countClicks,handleCompareClick } = useContext(carGridContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { homepageRef } = useContext(searchContext);


  

  useEffect(() => {
    const loadCars = async () => {
      try {
        const fetchedCars = await fetchData();
        const carsWithIndex = fetchedCars.map(car => ({
          ...car,
          imageIndex: 0
        }));
        SetCar(carsWithIndex);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadCars();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  function changeImageIndex(buttonId, direction) {
    const updatedCars = carArray.map((car) => {
      if (car.id === buttonId) {
        const newIndex = (car.imageIndex + direction + car.image.length) % car.image.length;
        return { ...car, imageIndex: newIndex };
      } else {
        return car;
      }
    });
    SetCar(updatedCars);
  }

  function scrollToHomepage() {
    homepageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
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
        {carArray.map((car) => (
          <div key={car.id}>
            <div className="car-container div-2">
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
                <Link
                  to={`/view-car`}
                  onClick={() => {
                    props.GetCarfromGrid(car);

                    countClicks(car.id);
                  }}
                >
                  <div className="middle-arrow-container"></div>
                </Link>
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

              <button className="add-to-cart-button">Add to Cart</button>
              <button className = "compare-button" onClick={ ()=>{handleCompareClick(car)}}>↑↓</button>
              <Link 
              to={"/compare-car"}
              >
              <button className = "compare-button"  >.</button>
              </Link>
              

            </div>
          </div>
        ))}
      </div>

      <button
        className="home-button"
        onClick={scrollToHomepage}
      >
        Home
      </button>
    </div>
  );
}

const MemoizedCarGrid = memo(CarGrid);

export default MemoizedCarGrid;
