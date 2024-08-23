import styles from "./home-component.module.css";
import IMAGES from "./images-array";
import React, { useState, useContext } from "react";
import { searchContext } from "./home_page_context";
import { useInterval } from "react-use";
import { carGridContext } from "../car-grid-component/car-grid-context";

import UIShellHeader from "../ui-shell-app/ui-shell-header";

import SearchIcon from "./search_button";

function HomePage() {
  const [scrollIndex, setScrollIndex] = useState(3);

  const { changeStoryIndex, storyIndex, intervalRunning, handleDynamicButton,scrollCarGridIntoView } =
    useContext(searchContext);

  const { homepageRef } = useContext(searchContext);
  const { isCarGridVisible, toggleCarGrid } = useContext(carGridContext);

  const max_interval = 10000;

  useInterval(changeStoryIndex, intervalRunning ? max_interval : null);

  function scrollImage() {
    setScrollIndex((prevIndex) => {
      if (prevIndex < IMAGES.length - 1) {
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

          <div class="flex flex-col gap-10">
            <p
              className="text-white font-bold 
          
  md:text-5xl 
  lg:text-6xl 
  xl:text-7xl 
  2xl:text-8xl 
  mb-10
  rounded-md absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              {IMAGES[scrollIndex].text}
            </p>
            <div className="absolute top-[80%] left-0 right-0 flex justify-center mb-20 gap-4">
              {IMAGES[scrollIndex].buttonText.map((text) => (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDynamicButton(text.id);
                    toggleCarGrid(true);
                  }}
                  className="  text-white border border-white hover:border-gray-200 py-2 px-4 rounded sm:py-1  sm:px-2 md:py-3 md:px-6 lg:py-4 lg:px-8 "
                >
                  {text.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.search_bar_container}></div>

      <div className=" mt-8 justify-center items-center h-[25vh]">
        <div className="  flex justify-center items-center   font-bold  rounded-md mb-20 ">
          <SearchIcon />
        </div>
        <div className=" flex justify-center items-center  text-[#078E8E] font-bold text-10xl rounded-md ">
          Easy as Search Find Drive away
        </div>
      </div>
      <div className="flex justify-center mt-8 mb-12">
        <button
        onClick={() => {
          toggleCarGrid(!isCarGridVisible);
          // scrollCarGridIntoView();
        }}
          aria-label={isCarGridVisible ? "Hide car grid" : "Show car grid"}
          className="px-6 py-3 text-lg font-semibold text-[#078E8E]  rounded shadow-md  "
        >
          {isCarGridVisible ? "..." : "See Our Cars"}
        </button>
      </div>
    </div>
  );
}

export default HomePage;
