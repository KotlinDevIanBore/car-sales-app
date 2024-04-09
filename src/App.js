import CarGrid from "./Car-grid-component";
import "./App.css";
import CARS from "./Data.js";
import HomePage from "./home-page/home-component.jsx";
import { useState, useEffect, useRef, forwardRef } from "react";




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
      
      <div className="scroll-home-page" ref={homepageRef} onScroll={()=>{handleClick()}} onClick={()=>{handleClick()}}>
        <HomePage />
      </div>

      <div ref={cargridref} className="car-grid-scroll" >
        
        <CarGrid cars={CARS} sayHi={sayHi} />
      </div>
    </div>
  );
}

export default App;
