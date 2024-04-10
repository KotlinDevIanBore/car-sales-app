import CarGrid from "./Car-grid-component";
import "./App.css";
import CARS from "./Data.js";
import HomePage from "./home-page/home-component.jsx";
import DisplayCar from "./view-car-component/view-car-component.jsx";
import { useState, useEffect, useRef, forwardRef } from "react";
import {Route, Routes} from "react-router-dom"





function App(props) {

 const  cargridref= useRef()
 const homepageRef= useRef()
 function sayHi(greeting){
  console.log(`Ian says${greeting}`)
  handleClickHome()

 }

 function handleClickHome (){

  (homepageRef.current).scrollIntoView({behavior: 'smooth',block:'start'})

 }
 

 function handleClick (){
  (cargridref.current).scrollIntoView({ behavior: 'smooth',block:'start' })
   }

 


  return (
    <div>
      <div>
      <div className="scroll-home-page" ref={homepageRef} onScroll={()=>{handleClick()}} onClick={()=>{handleClick()}}>

        <Routes>
        <Route path="/" element={<HomePage />} />


        </Routes>


        {/* <HomePage /> */}
      </div>

      <div ref={cargridref} className="car-grid-scroll" >

        <Routes>

        <Route path="/" element={<CarGrid cars={CARS} sayHi={sayHi} />} />



        </Routes>


        
        {/* <CarGrid cars={CARS} sayHi={sayHi} /> */}

      </div>

      </div>
      <Routes>
  <Route path="/view-car-component.jsx" element={<DisplayCar />} />
</Routes>

      

      
      

    </div>
  );
}

export default App;
