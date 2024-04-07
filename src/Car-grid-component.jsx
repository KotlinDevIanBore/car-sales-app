import "./App.css";
import { useState } from "react";

function CarGrid(props) {

    const [carArray,SetCar]= useState (props.cars)

    function changeImageIndex(buttonId) {
        console.log(`Button id: ${buttonId}`);

       const cars= props.cars.map ((car)=>{

        if (car.id===buttonId){

            return {... car, image: 'require("./car-pictures/discovery3.jpg")'}

        }

        else{
            return car;
        }

        })
        SetCar(cars)

    }

    return (
        <div>
            <nav className="top-navigation"> Navigation Bar</nav>
            <div className="grid">
                {carArray.map((car) => (
                    <div data-card-id={car.id} className="car-container div-2" key={car.name}>
                        <img
                            className="car-image"
                            src={car.image[0].URL} // Accessing URL property
                            alt=""
                        />
                        <div className="car-name">{car.name}</div>
                        <div className="car-price">{car.price}</div>
                        <button
                        onClick={() => { changeImageIndex(car.id) }}

                        data-button-id={car.id} className="add-to-cart">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarGrid;
