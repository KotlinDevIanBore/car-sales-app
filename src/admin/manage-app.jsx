
import { CarProvider } from "./manage-car-context"; 
import React from 'react';

import ManageCars from "./manage-car-component"; 
import CarCardComponent from "./analytics/clicked_cars"; 
import './manage-app.css';
import Tabs from "./clicked-carbon";
import EditCar from "../edit-car-app/edit-car";
import EditedCarContextProvider from "../edit-car-app/edit-car-context";


 

function ManageCarApp() {
  return (

    <EditedCarContextProvider>


    
    
    <CarProvider>
      <div className="container">
        <ManageCars className="component" />
        
        <Tabs className="component"/>
        <EditCar/>


        
        
      </div>
    </CarProvider>
    </EditedCarContextProvider>
     
  );
}

export default ManageCarApp