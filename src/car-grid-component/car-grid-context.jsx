import { createContext, useState, useRef } from "react";
import React from "react"; // Add this line


export const carGridContext = createContext();

export const CarGridContextProvider = ({ children }) => {
  const [carArray, SetCar] = useState([]);
  const carGridRef = useRef();

  function countClicks(carId) {
    console.log(`clicked car id is ${carId}`);

    const apiURL = "http://localhost:3000/api/clicked";


    fetch (apiURL,{

            'method': 'post',
            headers: {
                'Content-Type': 'application/json', // Specify content type
              },
            body: JSON.stringify({carid:carId})
        
    })
  }

  return (
    <carGridContext.Provider
      value={{ carArray, SetCar, carGridRef, countClicks }}
    >
      {children}
    </carGridContext.Provider>
  );
};
