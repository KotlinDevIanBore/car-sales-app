import "./home-component.css";

import IMAGES from "./images-array";
import React, { useState, useContext} from "react";
import { searchContext } from "./home_page_context";
import { carGridContext } from "../car-grid-component/car-grid-context";

function HomePage() {
  const [scrollIndex, setScrollIndex] = useState(1);

  const { text, setText, SendSearchRequest } = useContext(searchContext);

  const {carGridRef} = useContext(carGridContext)

  const {homepageRef} = useContext(searchContext)

  function scrollImage() {
    setScrollIndex((prevIndex) => {
      if (prevIndex < 10) {
        return prevIndex + 1;
      } else {
        return 1;
      }
    });
  }

  function handleChange(e) {
    const searchInput = e.target.value;
    setText(searchInput);
    console.log(text);
  }

  function scrollCarGridIntoView() {
    carGridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  } 

  function handleClick (){

    scrollCarGridIntoView()
    SendSearchRequest ()
  }

  return (
    <div
      className="  home-component"
      ref = {homepageRef}
    >
      <div className="home-page">
        <div
          className="home-image-container"
          onClick={() => {
            scrollImage("works");
          }}
        >
          {IMAGES.map((image,index) => {
            return (
              <img
                key={index}
                className="home-image"
                src={image["URL" + scrollIndex]}
                alt=""
              ></img>
            );
          })}
        </div>

        <button className="cars-in-stock-button" onClick={scrollCarGridIntoView} >Cars In Stock</button>
      </div>

      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder=" Search Your Dream Car Here "
          onChange={handleChange}
        ></input>
      </div>
      <button
        type="submit"
        onClick={
          handleClick

        }
        className="search-button"
      >
        Search
      </button>
    </div>
  );
}

export default HomePage;
