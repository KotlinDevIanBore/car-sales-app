import React from 'react';
import './ring.css'
import throttlelogo from "./logos/car-logo.jpeg"

const CircularRing = () => {
  return (
    <div className="circular-ring">
      <div className="ring-inner">
        <img src={throttlelogo} alt="" className="logo" />
      </div>
    </div>
  );
};

export default CircularRing;