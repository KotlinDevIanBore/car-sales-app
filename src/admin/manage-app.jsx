
import { CarProvider } from "./manage-car-context"; 
import React from 'react'; 
import './manage-app.css';
import Tabs from "./clicked-carbon";
import EditCar from "../edit-car-app/edit-car";
import EditedCarContextProvider from "../edit-car-app/edit-car-context";

 

function ManageCarApp() {
  return (
    <div>
      <EditedCarContextProvider>
        <CarProvider>
          <div className="flex  flex-wrap md:flex-nowrap md:flex-row w-full justify-center flex-grow">
            <div className="flex-grow">
             
            </div>
            <div className="flex-grow">
              <Tabs />
            </div>
            <div className="flex-grow">
              <EditCar />
            </div>
          </div>
        </CarProvider>
      </EditedCarContextProvider>
    </div>
  );
}

export default ManageCarApp