/* eslint-disable no-undef */
import "./App.css";

function CarGrid(props) {
    console.log(`Here ${props.cars}`);
    return (
        <div>
            <nav className="top-navigation"> Navigation Bar</nav>
            <div className="grid">
                {props.cars.map((car) => (
                    <div className="car-container div-2" key={car.name}>
                        <img
                            className="car-image"
                            src={car.image[7].URL} // Accessing URL property
                            alt=""
                        />
                        <div className="car-name">{car.name}</div>
                        <div className="car-price">{car.price}</div>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarGrid;
