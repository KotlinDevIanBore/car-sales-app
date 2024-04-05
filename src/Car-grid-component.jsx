import "./App.css";

import discoveryImage from "./car-pictures/discovery-front.jpg"

function CarGrid() {
    return (
        <div>
            <div>
            <div>
                <nav className="top-navigation"> Navigation Bar</nav>

                <div className="grid">
                    <div className="car-container div-1">
                        <img
                            className="car-image"
                            src={discoveryImage}
                            alt=""
                        />
                        <div className="car-name">LandRover Discovery</div>
                        <div className="car-price">5000000</div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <nav className="top-navigation"> Navigation Bar</nav>

                <div className="grid">
                    <div className="car-container div-1">
                        <img
                            className="car-image"
                            src={discoveryImage}
                            alt=""
                        />
                        <div className="car-name">LandRover Discovery</div>
                        <div className="car-price">5000000</div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <nav className="top-navigation"> Navigation Bar</nav>

                <div className="grid">
                    <div className="car-container div-1">
                        <img
                            className="car-image"
                            src={discoveryImage}
                            alt=""
                        />
                        <div className="car-name">LandRover Discovery</div>
                        <div className="car-price">5000000</div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <nav className="top-navigation"> Navigation Bar</nav>

                <div className="grid">
                    <div className="car-container div-1">
                        <img
                            className="car-image"
                            src={discoveryImage}
                            alt=""
                        />
                        <div className="car-name">LandRover Discovery</div>
                        <div className="car-price">5000000</div>
                    </div>
                </div>
            </div>
        </div>

        </div>
        
    );
}

export default CarGrid;
