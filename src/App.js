import CarGrid from "./Car-grid-component";
import "./App.css";
import CARS from "./Data.js";
import HomePage from "./home-page/home-component.jsx";
import DisplayCar from "./view-car-component/view-car-component.jsx";
import ManageCars from "./admin/manage-car-component.jsx";
import { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";

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
    image: [
      { URL: require("./car-pictures/forester2.jpg") },
      { URL: require("./car-pictures/forester.jpg") },
      { URL: require("./car-pictures/forester3.jpg") },
      { URL: require("./car-pictures/forester4.jpg") },
      { URL: require("./car-pictures/forester5.jpg") },
      { URL: require("./car-pictures/forester6.jpg") },
      { URL: require("./car-pictures/forester7.jpg") },
      { URL: require("./car-pictures/forester8.jpg") },
      { URL: require("./car-pictures/forester9.jpg") },
      { URL: require("./car-pictures/forester10.jpg") },
    ],
    price: "ksh 1,999,999",
    availability: "available",
    location: "Nairobi",
  };

  function AddCar(values) {
    const newCar = {
      ...Car,
      id: carArray.length + 1,
      brand: values.brand,
      name: values.name,
      price: values.price,
      image: [{ URL: values.imageURL }, ...Car.image.slice(1)],
    };

    console.log (`values :${values}`)


    SetCar((prevcarArray) => [...prevcarArray, newCar]);


    console.log(`Car array works, here is thenew Car array ${JSON.stringify(carArray)} `);
  }

  function sayHi(greeting) {
    console.log(`Ian says${greeting}`);
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
      <div>
        <div
          className="scroll-home-page"
          ref={homepageRef}
          onScroll={() => {
            handleClick();
          }}
          onClick={() => {
            handleClick();
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>

          {/* <HomePage /> */}
        </div>

        <div ref={cargridref} className="car-grid-scroll">
          <Routes>
            <Route
              path="/"
              element={
                <CarGrid
                  sayHi={sayHi}
                  GetCarfromGrid={GetCarfromGrid}
                  carArray={carArray}
                />
              }
            />
          </Routes>

          {/* <CarGrid cars={CARS} sayHi={sayHi} /> */}
        </div>
      </div>
      <Routes>
        {/* <Route path={`/view-car/${name}`} element={<DisplayCar />} /> */}
        <Route path="/view-car" element={<DisplayCar car={car} />} />
        {/* <Route path='/' element={<DisplayCar name={name} />} /> */}
      </Routes>

      <Routes>
        <Route path="/add-car" element={<ManageCars AddCar={AddCar} />} />
      </Routes>
    </div>
  );
}

export default App;