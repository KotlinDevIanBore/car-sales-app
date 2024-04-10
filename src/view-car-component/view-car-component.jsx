import React from 'react'
// import { Button } from "carbon-components-react";
// import sportsCar from "./home-page-images/pexels-sarmad-mughal-305070.jpg"
import { useState, useEffect, useRef } from "react";

import { BrowserRouter as Router, Route } from 'react-router-dom';

function DisplayCar() {
  return (
    <div 
    className='display-car-page'>
      <div >
        <h2>
        Yes, you can include a route directly within your JSX structure like that. However, this approach is not common and might lead to unexpected behavior. Typically, routes are defined at a higher level, like in the main routing component of your application, such as App.js or Routes.js.

But if for some reason you want to include a route within a specific part of your JSX structure, it's technically possible. However, it's important to understand that React Router works by matching the current URL to a set of routes and rendering the component associated with the matched route. Placing a ncomponent within a specific div won't affect how React Router matches URLs and renders components.

Here's how you could technically achieve what you're describing:
        </h2>

      </div>
    </div>
  );
}


export default DisplayCar;
