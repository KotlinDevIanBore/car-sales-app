// import "./car-grid-component.module.css";

import styles from "./car-grid-component.module.css";

import React, { useState, useEffect, memo, useContext } from "react";
import { Link } from "react-router-dom";
import fetchData from "./car-grid-component-resource";
import { carGridContext } from "./car-grid-context";
import { searchContext } from "../home-page/home_page_context";

function CarGrid(props) {
  const { carArray, SetCar, carGridRef, countClicks, handleCompareClick,DisplayCar,scrollCarGridIntoView,nextPage,limit,offset } =
    useContext(carGridContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { homepageRef } = useContext(searchContext);
  const [imageIndex1] = useState(0);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const fetchedCars = await fetchData(limit,offset);
        const carsWithIndex = fetchedCars.map((car) => ({
          ...car,
          imageIndex: 0,
        }));
        SetCar(carsWithIndex);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
      scrollCarGridIntoView();
    };

    loadCars();
  }, [offset]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  function changeImageIndex(buttonId, direction) {
    const index = carArray.findIndex((car) => car.id === buttonId);
    if (index !== -1) {
      const car = carArray[index];
      const newIndex =
        (car.imageIndex + direction + car.image.length) % car.image.length;
      carArray[index] = { ...car, imageIndex: newIndex };
      SetCar([...carArray]); 
    }
  }

  

  function scrollToHomepage() {
    homepageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <div ref={carGridRef}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />

        <div className={styles.grid}>
          {carArray.map((car) => (
            <div key={car.id}>
              <div className={`${styles.car_container} ${styles.div_2}`}>
                <div className={styles.arrow_image_container}>
                  <img
                    className={styles.car_image}
                    // src={car.image[imageIndex1].URL}
                    src={car.image[car.imageIndex].URL}
                    alt=""
                  />
                  <div
                    className={styles.forward_arrow_container}
                    onClick={() => changeImageIndex(car.id, 1)}
                    // onClick={() => changeImageIndex1(car)}
                  >
                    <span className="material-symbols-outlined forward-arrow">
                      navigate_next
                    </span>
                  </div>
                  <Link
                    to={`/view-car`}
                    onClick={() => {
                      
                      DisplayCar(car)

                      countClicks(car.id);
                    }}
                  >
                    <div className={styles.middle_arrow_container}></div>
                  </Link>
                  <div
                    className={styles.back_arrow_container}
                    onClick={() => changeImageIndex(car.id, -1)}
                    // onClick={() => changeImageIndex1(car)}
                  >
                    <span className="material-symbols-outlined back-arrow">
                      navigate_before
                    </span>
                  </div>
                </div>

                <div className={styles.car_name}>
                  {car.brand} {car.name} {car.year}
                </div>
                <div className={styles.car_price}> {car.price}</div>

                {/* <p className={`text-sm truncate overflow-hidden max-w-md ${styles.car_price}`}>{car.description}</p> */}

                <p
  className={`text-sm overflow-hidden max-w-md h-6 ${styles.car_price}`}
  style={{ lineHeight: '1.2 !important', maxHeight: '1.2em !important' }}
>
  <span
    className="truncate"
    dangerouslySetInnerHTML={{ __html: car.description }}
  />
</p>

                <button
                  className={styles.compare_button}
                  onClick={() => {
                    handleCompareClick(car);
                  }}
                >
                  ↑↓
                </button>
                <Link to={"/compare-car"}>
                  <button className={styles.compare_button}>.</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  marginBottom: '20px'
}}>
  <button 
    onClick={ ()=>{nextPage('-')} } 
    style={{
      padding: '10px 20px',
      marginRight: '10px',
      backgroundColor: '#364a72',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      letterSpacing: '1px'
    }}
    onMouseOver={(e) => e.target.style.backgroundColor = '#4a63a0'}
    onMouseOut={(e) => e.target.style.backgroundColor = '#364a72'}
  >
{'<'} </button>
  <button 
   onClick={ ()=>{nextPage('+')} } 
    style={{
      padding: '10px 20px',
      backgroundColor: '#364a72',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      letterSpacing: '1px'
    }}
    onMouseOver={(e) => e.target.style.backgroundColor = '#4a63a0'}
    onMouseOut={(e) => e.target.style.backgroundColor = '#364a72'}
  >
    {'>'}
  </button>
</div>

    </>
  );
}

const MemoizedCarGrid = memo(CarGrid);

export default MemoizedCarGrid;
