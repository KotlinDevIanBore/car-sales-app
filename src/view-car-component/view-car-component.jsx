import React from "react";
import { useState} from "react";
import "./view-car.css";
import UIShellHeader from "../ui-shell-app/ui-shell-header";
// import HtmlParser from 'react-html-parser';

function DisplayCar(props) {
  const [imageIndex, setimageIndex] = useState(0);
  function handleImageChange(direction) {
    setimageIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      const lastIndex = props.car.image.length - 1;
      if (newIndex < 0) {
        return lastIndex;
      } else if (newIndex > lastIndex) {
        return 0;
      } else {
        return newIndex;
      }
    });
  }
  return (
    <div className="display-car-page">
      <div className="ui-shell-header-container">
      <UIShellHeader/>
      </div>
     
      <div className="image-info-container">
        <div className="hero-image-container">
          <img
            className="hero-image"
            src={props.car.image[imageIndex].URL}
            alt=""
          />
          <div
            className="change-image-forward-div"
            onClick={() => {
              handleImageChange(1);
            }}
          >
            +
          </div>
          <div
            className="change-image-backward-div"
            onClick={() => {
              handleImageChange(-1);
            }}
          >
            -
          </div>

          {/* <button
            className="change-image-button-minus"
            onClick={() => {
              handleImageChange(-1);
            }}
          >
          </button> */}
          
        </div>

        

        <p
          className="text-sm  max-w-md "
          dangerouslySetInnerHTML={{ __html: props.car.description }}
        ></p>
        <div className="info-container">
          <ol class="gradient-list">
            <li>{props.car.brand}</li>
            <li>{props.car.name}</li>
            <li>{props.car.price}</li>
            <li>{props.car.availability}</li>
            <li>Location:{props.car.location}</li>
          </ol>
        </div>
       

      </div>
    </div>
  );
}

export default DisplayCar;
