// import "./home-component.css";
// import styles from "./home-component.css";

import styles from "./home-component.module.css";
import IMAGES from "./images-array";
import storiesImages from "../stories-app/stories_photos/stories_array";
import React, { useState, useContext } from "react";
import { searchContext } from "./home_page_context";
import { carGridContext } from "../car-grid-component/car-grid-context";
import { useInterval } from "react-use";

import UIShellHeader from "../ui-shell-app/ui-shell-header";

import SearchIcon from "./search_button";

function HomePage() {

  const [scrollIndex, setScrollIndex] = useState(1);

  const {
    changeStoryIndex,
    storyIndex,
    intervalRunning,
  } = useContext(searchContext);
  

  const { homepageRef } = useContext(searchContext);

  const max_interval = 10000;

  useInterval(changeStoryIndex, intervalRunning ? max_interval : null);

  function scrollImage() {
    setScrollIndex((prevIndex) => {
      if (prevIndex < IMAGES.length-1) {
        return prevIndex + 1;
      } else {
        return 0;
      }
    });
  }

  

  return (
    <div className={styles.home_component} ref={homepageRef}>
      <UIShellHeader />

      <div className="home-page relative">
        <div
          className={styles.home_image_container}
          onClick={() => {
            scrollImage("works");
          }}
        >
          

              <img
                className={styles.home_image}
                // src={image["URL" + scrollIndex]}
                src={IMAGES[scrollIndex].URL}

                alt=""
              ></img>

<p className="text-white font-bold 
  md:text-5xl 
  lg:text-6xl 
  xl:text-7xl 
  2xl:text-8xl 
  rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{IMAGES[scrollIndex].text}</p>
            
        </div>
      </div>

      <div className={styles.search_bar_container}></div>

      
      <div className=" mt-8 justify-center items-center h-[25vh]" >
  <div className="  flex justify-center items-center   font-bold  rounded-md mb-20 ">
    <SearchIcon />
  </div>
  <div className=" flex justify-center items-center  text-[#078E8E] font-bold text-10xl rounded-md ">
   Easy as Search Find Drive away
  </div>
</div>
    </div>
  );
}

export default HomePage;
