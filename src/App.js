import React, { useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import MemoizedCarGrid from "./car-grid-component/Car-grid-component.jsx";
import "./App.css";
import HomePage from "./home-page/home-component.jsx";
import DisplayCar from "./view-car-component/view-car-component.jsx";

import ManageCarApp from "./admin/manage-app.jsx";
function App(props) {
  const [car, GetCarfromGrid] = useState("error");
  const cargridref = useRef();
  const homepageRef = useRef();

  function RenderHomePage(greeting) {
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
                RenderHomePage={RenderHomePage}
                GetCarfromGrid={GetCarfromGrid}
              />
            }
          />
        </Routes>
      </div>
      <Routes>
        <Route path="/view-car" element={<DisplayCar car={car} />} />
        <Route
          path="/add-car"
          element={<ManageCarApp RenderHomePage={RenderHomePage} />}
        />
      </Routes>
    </div>
  );
}

export default App;
