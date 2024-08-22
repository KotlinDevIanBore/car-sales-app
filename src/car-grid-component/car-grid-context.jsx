import { createContext, useState, useRef,useContext } from "react";
import { API_URL } from "../../api";
import React from "react"; // Add this line
import { ViewCarContext } from "../view-car-component/view-car-context";


export const carGridContext = createContext();

export const CarGridContextProvider = ({ children }) => {

  const [carArray, SetCar] = useState([]);
  const carGridRef = useRef();
  const [comparisonArray,SetComparisonArray] = useState([]);
  const {SetDisplayCar} = useContext (ViewCarContext);

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

    SetComparisonArray([...comparisonArray, car]);

  }

  function DisplayCar (car){


    console.log (`${car}`)

    SetDisplayCar (car)

  }

  return (
    <carGridContext.Provider
      value={{ carArray, SetCar, carGridRef, countClicks,handleCompareClick,comparisonArray,SetComparisonArray,DisplayCar }}
    >
      {children}
    </carGridContext.Provider>
  );
};
