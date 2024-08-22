import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DisplayCar from "./view-car-component/view-car-component.jsx";
import RenderComparison from "./comparison-app/comparison-component.jsx";
import LandingPage from "./landing-page/landing-page.jsx";
import ManageCarApp from "./admin/manage-app.jsx";

function App(props) {
  const [car, GetCarfromGrid] = useState("error");

  return (
  

<div className=" m-0 p-0 border-0">


<Routes>
  <Route path="/" element={<LandingPage props ={GetCarfromGrid} />} />
  <Route path="/view-car" element={<DisplayCar car={car} />} />
  <Route path="/add-car" element={<ManageCarApp />} />
  <Route path="/compare-car" element={<RenderComparison />} />

</Routes>


</div>
  );
}

export default App;
