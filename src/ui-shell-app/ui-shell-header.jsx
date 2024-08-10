import React from "react";
import CircularRing from "../stories-app/ring";
import "./ui-shell-header.scss"; // Import the SCSS file
import { useInterval } from "react-use";
import { useState, useContext } from "react";
import { searchContext } from "../home-page/home_page_context";
import SearchIcon from "../home-page/search_button";
import storiesImages from "../stories-app/stories_photos/stories_array";


import styles from "../home-page/home-component.module.css";



const UIShellHeader = () => {
  

  const { handleRingClick } = useContext(searchContext);
  const {
    changeStoryIndex,
    storyIndex,
    intervalRunning,
  } = useContext(searchContext);

  const max_interval = 10000;

  
  useInterval(changeStoryIndex, intervalRunning ? max_interval : null);
  return (

    
    <div className="ui-shell-header">
      <div>
      <div className="wrapper-element">
        <div className="stories-ring" onClick={handleRingClick}>
          <CircularRing />
        </div>
        
      </div>
      

      </div>
      <div className={`${intervalRunning? `h-[100vh]`:`h-0` }`}>
      {intervalRunning && (
        <div>
          <img
            src={storiesImages[storyIndex].url}
            alt=""
            onClick={changeStoryIndex}
            className={styles.story_image}
          />
          <p className={styles.story_text}>{storiesImages[storyIndex].text}</p>
        </div>
      )}  </div>
      
      {/* <div className={`${intervalRunning? `h-[100vh]`:`h-0` }`}>test</div>
       */}

      {/* <SearchIcon/> */}
      <div className="flex basis-1/8 gap-4 items-center">
      <div>Our Collection</div>
      <div>About</div>
      <div>Contact Us </div>

      </div>
     
    </div>
  );
};

export default UIShellHeader;
