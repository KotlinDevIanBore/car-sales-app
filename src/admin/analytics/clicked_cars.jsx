
import React, { useContext, useState } from "react";
import { Row, Col, Card } from "antd";
import "./clicked_cars.css";
import { CarContext } from "../manage-car-context";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const CarCardComponent = () => {
  const { mostClickedCar,mostSearchedCar } = useContext(CarContext);
  
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!mostClickedCar || !Array.isArray(mostClickedCar)) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <div>
        {/* <p className="most-clicked-car-title">Most Clicked Cars</p> */}
      </div>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Most Clicked Cars" value="1" />
            <Tab label="Most Searched Cars" value="2" />
            <Tab label="Trends" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {" "}
          <div className="flexbox-container">
            {mostClickedCar.map((car) => (
              <Row className="flexbox" justify="center" align="middle">
                <Col className="flexbox-item item-1">
                  <Card style={{ width: "100%", height: "100%" }}>
                    <p>
                      {car.brand} {car.name}
                    </p>
                    <p>Clicks: {car.clicks}</p>
                    <img className="car-image1" src={car.image[0].URL} alt="" />
                  </Card>
                </Col>
              </Row>
            ))}
          </div>
        </TabPanel>

        <TabPanel value="2">
          <div className="flexbox-container">
            {mostSearchedCar.map((car) => (
              <Row className="flexbox" justify="center" align="middle">
                <Col className="flexbox-item item-1">
                  <Card style={{ width: "100%", height: "100%" }}>
                    <p>
                      {car.brand} {car.name}
                    </p>
                    <p>Searches: {car.searches}</p>
                    <img className="car-image1" src={car.image[0].URL} alt="" />
                  </Card>
                </Col>
              </Row>
            ))}
          </div>
        </TabPanel>

        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </div>
  );
};

export default CarCardComponent;