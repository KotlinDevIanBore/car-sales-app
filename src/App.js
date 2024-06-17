import React, { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import MemoizedCarGrid from "./car-grid-component/Car-grid-component.jsx";
import "./App.css";
import CARS from "./Data.js";
import HomePage from "./home-page/home-component.jsx";
import DisplayCar from "./view-car-component/view-car-component.jsx";
import ManageCarApp from "./admin/manage-app.jsx";
import ManageCars from "./admin/manage-car-component.jsx";

function App(props) {
  const [car, GetCarfromGrid] = useState("error");
  const cargridref = useRef();
  const homepageRef = useRef();
  const [carArray, SetCar] = useState(CARS);

  const Car = {
    id: "9",
    brand: "Subaru",
    name: "Forester",
    imageIndex: "0",
    image: [{ URL: require("./car-pictures/forester2.jpg") }],
    price: "ksh 1,999,999",
    availability: "available",
    location: "Nairobi",
  };

  useEffect(() => {
    localStorage.setItem("carArray", JSON.stringify(carArray));
  }, [carArray]);

  function AddCar(values) {
    if (!values.imageURLs) {
      alert("Error");
      return; // or handle the case where imageURL is undefined
    }

    alert(JSON.stringify(values));
    const images = values.imageURLs.map((url) => ({ URL: url }));
    const newCar = {
      ...Car,
      id: carArray.length + 1,
      brand: values.brand,
      name: values.name,
      price: values.price,
      image: images,
    };

    SetCar((prevcarArray) => [...prevcarArray, newCar]);
  }

  function sayHi(greeting) {
    handleClickHome();
  }

  function handleClickHome() {
    homepageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleClick() {
    cargridref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div>
      <div
        className="scroll-home-page"
        ref={homepageRef}
        onScroll={handleClick}
        onClick={handleClick}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <div ref={cargridref} className="car-grid-scroll">
        <Routes>
          <Route
            path="/"
            element={
              <MemoizedCarGrid
                sayHi={sayHi}
                GetCarfromGrid={GetCarfromGrid}
                carArray={carArray}
              />
            }
          />
        </Routes>
      </div>
      <Routes>
        <Route path="/view-car" element={<DisplayCar car={car} />} />
        <Route path="/add-car" element={<ManageCarApp />} />
      </Routes>
    </div>
  );
}

export default App;
