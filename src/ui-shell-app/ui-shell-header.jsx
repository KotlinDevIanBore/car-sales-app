import React from "react";
import CircularRing from "../stories-app/ring";
import "./ui-shell-header.scss"; // Import the SCSS file
import { useInterval } from "react-use";
import { useState, useContext } from "react";
import { searchContext } from "../home-page/home_page_context";
import SearchIcon from "../home-page/search_button";

const UIShellHeader = () => {
  const [intervalRunning, setIntervalRunning] = useState(false);

  const { handleRingClick } = useContext(searchContext);

  const max_interval = 10000;

  function changeStoryIndex() {
    setstoryIndex((prevIndex) => {
      if (prevIndex < 5) {
        return prevIndex + 1;
      } else {
        return 0;
      }
    });
  }

  // setInterval (()=>{changeStoryIndex()},30000);
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
      
      

      {/* <SearchIcon/> */}
      <div className="flex basis-1/8 gap-4">
      <div>Our Collection</div>
      <div>About</div>
      <div>Contact Us </div>

      </div>
     
    </div>
  );
};

export default UIShellHeader;
