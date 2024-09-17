import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals.js";
import { BrowserRouter } from "react-router-dom";
import { CarGridContextProvider } from "./car-grid-component/car-grid-context.jsx";
import { SearchProvider } from "./home-page/home_page_context.jsx";
import { CarProvider } from "./admin/manage-car-context.jsx";
import ViewCarContextProvider from "./view-car-component/view-car-context.jsx";
import EditedCarContextProvider from "./edit-car-app/edit-car-context.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ViewCarContextProvider>
        <CarGridContextProvider>
          <SearchProvider>
            <EditedCarContextProvider>
            <App />

            </EditedCarContextProvider>
           
           
          </SearchProvider>
        </CarGridContextProvider>
      </ViewCarContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
