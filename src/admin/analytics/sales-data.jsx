import React from "react";
import { useContext } from "react";
import { CarContext } from "../manage-car-context";
import "./clicked_cars.css";




const RenderSalesData = ()=>{

    const {salesData} = useContext(CarContext);

    if (!salesData || salesData.length === 0) {
      return <div>...</div>;
    }
  



return <div className="flexbox-container">
{salesData.map((car) => (
  <div className="flexbox" justify="center" align="middle">
    <div className="flexbox-item item-1">
      <div style={{ width: "100%", height: "100%" }}>
        <p className="most-clicked-car-name">
          {car.brand} {car.name}
        </p>
        {/* <p className="car-clicks" >Clicks: {car.sales}</p> */}
        <img className="car-image1" src={car.image[0].URL} alt="" />
      </div>
    </div>
  </div>
))}
</div>

}

export default RenderSalesData;