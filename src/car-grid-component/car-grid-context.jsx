import { createContext, useState, useRef,useContext } from "react";
import { API_URL } from "../../api";
import React from "react"; 
import { ViewCarContext } from "../view-car-component/view-car-context";
import { searchContext } from "../home-page/home_page_context";

export const carGridContext = createContext();

export const CarGridContextProvider = ({ children }) => {
  // const {scrollCarGridIntoView} = useContext (searchContext);
  const {SetDisplayCar} = useContext (ViewCarContext);
  const [carArray, SetCar] = useState([]);
  const carGridRef = useRef();
  const [comparisonArray,SetComparisonArray] = useState([]);
  
  const [isCarGridVisible, setCarGridVisibility] = useState(false);

  function scrollCarGridIntoView() {
    carGridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  

  const toggleCarGrid = (condition)=>{

    setCarGridVisibility (condition);
    scrollCarGridIntoView ();
  }

  function countClicks(carId) {
    console.log(`clicked car id is ${carId}`);

    
    const apiURL = `${API_URL}/api/clicked`;



    fetch (apiURL,{

            'method': 'post',
            headers: {
                'Content-Type': 'application/json', 
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
      value={{ carArray, SetCar, carGridRef, scrollCarGridIntoView, countClicks,handleCompareClick,comparisonArray,SetComparisonArray,DisplayCar,isCarGridVisible, setCarGridVisibility,toggleCarGrid }}
    >
      {children}
    </carGridContext.Provider>
  );
};
