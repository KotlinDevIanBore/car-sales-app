import { createContext, useState, useRef } from "react";
import { API_URL } from "../../api";
import React from "react"; // Add this line


export const carGridContext = createContext();

export const CarGridContextProvider = ({ children }) => {
  const [carArray, SetCar] = useState([]);
  const carGridRef = useRef();
  const [comparisonArray,SetComparisonArray] = useState([]);

  function countClicks(carId) {
    console.log(`clicked car id is ${carId}`);

    // const apiURL = "http://localhost:3000/api/clicked";
    const apiURL = `${API_URL}/api/clicked`;



    fetch (apiURL,{

            'method': 'post',
            headers: {
                'Content-Type': 'application/json', // Specify content type
              },
            body: JSON.stringify({carid:carId})
        
    })
  }

  function handleCompareClick(car){



// SetComparisonArray ([...comparisonArray, car])
    SetComparisonArray([...comparisonArray, car]);

  }

  // function fetchComparedCars(car.id){



  // }

  return (
    <carGridContext.Provider
      value={{ carArray, SetCar, carGridRef, countClicks,handleCompareClick,comparisonArray,SetComparisonArray }}
    >
      {children}
    </carGridContext.Provider>
  );
};
