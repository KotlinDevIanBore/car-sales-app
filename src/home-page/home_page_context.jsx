import { createContext, useState, useContext, useRef } from "react";
import { carGridContext } from "../car-grid-component/car-grid-context";
import React from "react";
import { SendSearchRequest } from "../api";
import { SendHomePageRequest } from "../api";

export const searchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [text, setText] = useState(null);
  const [searchCar, setsearchCar] = useState(null);
  const { SetCar } = useContext(carGridContext);
  const [storyIndex, setstoryIndex] = useState(0);
  const [intervalRunning, setIntervalRunning] = useState(false);
  const { carGridRef,scrollCarGridIntoView,toggleCarGrid } = useContext(carGridContext);

  const homepageRef = useRef();

  function handleRingClick() {
    setIntervalRunning(!intervalRunning);
    
  }

  

  async function fetchSearchData (){

    
    // toggleCarGrid(true);

    // await Promise.resolve();

    const data = await SendSearchRequest (text);
    SetCar(data?.cars);

  }

  function changeStoryIndex() {
    setstoryIndex((prevIndex) => {
      if (prevIndex < 5) {
        return prevIndex + 1;
      } else {
        return 0;
      }
    });
  }

  // function scrollCarGridIntoView() {
  //   carGridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  // }
  async function handleDynamicButton (id){

    console.log (id);
    const data = await SendHomePageRequest (id);
    SetCar (data.data);

    scrollCarGridIntoView();
    }
  return (
    <searchContext.Provider
      value={{
        text,
        setText,
        fetchSearchData,
        searchCar,
        setsearchCar,
        homepageRef,
        changeStoryIndex,
        storyIndex,
        setstoryIndex,
        handleRingClick,
        intervalRunning,
        setIntervalRunning,
        scrollCarGridIntoView,
        handleDynamicButton

      }}
    >
      {children}
    </searchContext.Provider>
  );
};
