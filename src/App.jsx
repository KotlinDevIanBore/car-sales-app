import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MemoizedCarGrid from "./car-grid-component/Car-grid-component.jsx";
import "./App.css";
import HomePage from "./home-page/home-component.jsx";
import DisplayCar from "./view-car-component/view-car-component.jsx";
import RenderComparison from "./comparison-app/comparison-component.jsx";



// const MainPage = ()=>{

//   return <>

// <HomePage />

// <MemoizedCarGrid GetCarfromGrid={GetCarfromGrid} />


  
  
  
//   </>
// }

import ManageCarApp from "./admin/manage-app.jsx";
function App(props) {
  const [car, GetCarfromGrid] = useState("error");

  return (
    <div>
      {/* <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
            path="/"
            element={
              <MemoizedCarGrid
                GetCarfromGrid={GetCarfromGrid}
              />
            }
          />
      <Route path="/view-car" element={<DisplayCar car={car} />} />
      <Route
          path="/add-car"
          element={<ManageCarApp  />}
        />

                <Route path="/compare-car" element={<RenderComparison />} />




      </Routes> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Routes>
        <Route
          path="/"
          element={<MemoizedCarGrid GetCarfromGrid={GetCarfromGrid} />}
        />
        <Route path="/view-car" element={<DisplayCar car={car} />} />
        <Route path="/add-car" element={<ManageCarApp />} />
        <Route path="/compare-car" element={<RenderComparison />} />
      </Routes>
    </div>
  );
}

export default App;
