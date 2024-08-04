// import "./home-component.css";
// import styles from "./home-component.css";

import styles from "./home-component.module.css"
import IMAGES from "./images-array";
import storiesImages from "../stories-app/stories_photos/stories_array";
import React, { useState, useContext } from "react";
import { searchContext } from "./home_page_context";
import { carGridContext } from "../car-grid-component/car-grid-context";
import { useInterval } from "react-use";
import UIShellHeader from "../ui-shell-app/ui-shell-header";

function HomePage() {
  const [scrollIndex, setScrollIndex] = useState(1);

  const {
    text,
    setText,
    SendSearchRequest,
    changeStoryIndex,
    storyIndex,
    intervalRunning,
  } = useContext(searchContext);

  const { carGridRef } = useContext(carGridContext);

  const { homepageRef } = useContext(searchContext);

  const max_interval = 10000;

  useInterval(changeStoryIndex, intervalRunning ? max_interval : null);

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

  function handleClick() {
    scrollCarGridIntoView();
    SendSearchRequest();
  }

  return (
    <div className={styles.home_component} ref={homepageRef}>
      
      <UIShellHeader />

      <div className="home-page">
        <div
          
       className={styles.home_image_container}

          onClick={() => {
            scrollImage("works");
          }}
        >
          {IMAGES.map((image, index) => {
            return (
              <img
                key={index}
                className={styles.home_image}
                src={image["URL" + scrollIndex]}
                alt=""
              ></img>
            );
          })}
        </div>

        <button
          className={styles.cars_in_stock_button}
          onClick={scrollCarGridIntoView}
        >
          Cars In Stock
        </button>
      </div>

      <div className={styles.search_bar_container}>
      
        <input
          type="text"
          className={styles.search_bar}
          placeholder=" Search Your Dream Car Here "
          onChange={handleChange}
        ></input>
         <button type="submit" onClick={handleClick} className={styles.search_button}>
        Search
      </button>
      </div>
     

      {intervalRunning && (
        <div>
          <img
            src={storiesImages[storyIndex].url}
            alt=""
  
            className={styles.story_image}
          />
          <p className={styles.story_text}>{storiesImages[storyIndex].text}</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
