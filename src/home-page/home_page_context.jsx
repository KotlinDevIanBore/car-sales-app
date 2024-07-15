import { createContext, useState, useContext,useRef } from "react";
import { carGridContext } from "../car-grid-component/car-grid-context";
import React from "react"; 



export const searchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [text, setText] = useState(null);
  const [searchCar, setsearchCar] = useState(null);
  const { SetCar } = useContext(carGridContext);
  const homepageRef = useRef();


  async function SendSearchRequest() {
    const apiURl = "http://localhost:3000/api/search";

    try {
      const response = await fetch(apiURl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Text: text }),
      });
      console.log("search request sent");

      const data = await response.json();
      setText(null);
      console.log (data.cars)



      

      SetCar (data.cars)


      return data;
    } catch (error) {
      console.error("Error sending search request:", error);
      return { error: "Error sending search request" }; 
    }
  }

  return (
    <searchContext.Provider
      value={{ text, setText, SendSearchRequest, searchCar, setsearchCar,homepageRef }}
    >
      {children}
    </searchContext.Provider>
  );
};