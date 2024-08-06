import React from 'react';
import './ring.css'
import throttlelogo from "./logos/car-logo.jpeg"
import storiesImages from "./stories_photos/stories_array"

const CircularRing = () => {

  
  return (
    <div>
      <div className="circular-ring">
      <div className="ring-inner">
        <img src={throttlelogo} alt="" className="logo" />
      </div>
    </div>

    {/* <div>Our Stories</div> */}

    </div>
    
  );
};

export default CircularRing;