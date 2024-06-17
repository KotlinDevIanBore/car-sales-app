import { Button } from "carbon-components-react";
import "./home-component.css"; // Importing CSS file
// import sportsCar from "./home-page-images/pexels-sarmad-mughal-305070.jpg"
import sportsCar from "./home-page-images/audi-image.jpg";
import IMAGES from "./images-array";
import { useState, useEffect, useRef } from "react";

function HomePage(props) {
  const [scrollIndex, setScrollIndex] = useState(1);
  // const homePageRef = useRef(null); // Create a ref

  function scrollImage() {
    setScrollIndex((prevIndex) => {
      if (prevIndex < 10) {
        return prevIndex + 1;
      } else {
        return 1;
      }
    });
  }

  return (
    <div
      // ref={homePageRef}
      className="  home-component"
    >
      <div className="home-page">
        <div className="home-image-container">
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              placeholder=" Search Your Dream Car Here "
            ></input>
          </div>
          {IMAGES.map((image) => {
            return (
              <img
                className="home-image"
                src={image["URL" + scrollIndex]}
                onClick={() => {
                  scrollImage("works");
                }}
              ></img>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default HomePage;
