
import { CarProvider } from "./manage-car-context"; 
import React from 'react';

import ManageCars from "./manage-car-component"; 
import CarCardComponent from "./analytics/clicked_cars"; import './manage-app.css';
import Tabs from "./clicked-carbon";



 

function ManageCarApp() {
  return (
    <CarProvider>
      <div className="container">
        <ManageCars className="component" />
        
        <Tabs className="component"/>


        
        
      </div>
    </CarProvider>
  );
}

export default ManageCarApp