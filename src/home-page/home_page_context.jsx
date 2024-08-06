import { createContext, useState, useContext, useRef } from "react";
import { carGridContext } from "../car-grid-component/car-grid-context";
import React from "react";
import { API_URL } from "../../api";

export const searchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [text, setText] = useState(null);
  const [searchCar, setsearchCar] = useState(null);
  const { SetCar } = useContext(carGridContext);
  const [storyIndex, setstoryIndex] = useState(0);
  const [intervalRunning, setIntervalRunning] = useState(false);
  const { carGridRef } = useContext(carGridContext);

  const homepageRef = useRef();

  function handleRingClick() {
    setIntervalRunning(!intervalRunning);
   
  }

  async function SendSearchRequest() {
    // const apiURl = "http://localhost:3000/api/search";
    const apiURl = `${API_URL}/api/search`;

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
      console.log(data.cars);

      SetCar(data.cars);

      return data;
    } catch (error) {
      console.error("Error sending search request:", error);
      return { error: "Error sending search request" };
    }
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

  function scrollCarGridIntoView() {
    carGridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <searchContext.Provider
      value={{
        text,
        setText,
        SendSearchRequest,
        searchCar,
        setsearchCar,
        homepageRef,
        changeStoryIndex,
        storyIndex,
        setstoryIndex,
        handleRingClick,
        intervalRunning,
        setIntervalRunning,
        scrollCarGridIntoView
      }}
    >
      {children}
    </searchContext.Provider>
  );
};
