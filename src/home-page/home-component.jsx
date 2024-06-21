
import "./home-component.css"; 
import { Link } from "react-router-dom";

import IMAGES from "./images-array";
import { useState} from "react";

function HomePage(props) {
  const [scrollIndex, setScrollIndex] = useState(1);

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
                alt=''
                onClick={() => {
                  scrollImage("works");
                }}
              ></img>
            );
          })}
        </div>
      </div>
      <Link
        to={"/add-car"}
        // target="_blank"
      >
        <button>Manage Cars</button>
      </Link>
    </div>
  );
}
export default HomePage;
