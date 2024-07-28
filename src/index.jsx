import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import {BrowserRouter} from "react-router-dom";
import { CarGridContextProvider } from './car-grid-component/car-grid-context.jsx';
import { SearchProvider } from "./home-page/home_page_context.jsx";
import { CarProvider } from './admin/manage-car-context.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CarGridContextProvider>

      <SearchProvider>

          
        <App />


        

      </SearchProvider>



    </CarGridContextProvider>

    
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
