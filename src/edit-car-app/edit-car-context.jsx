import { createContext } from "react";
import React, { useState, useEffect, memo, useContext } from "react";
import fetchData from "../car-grid-component/car-grid-component-resource";
import { carGridContext } from "../car-grid-component/car-grid-context";
import { API_URL } from "../../api";


export const EditedCarContext = createContext ();


const EditedCarContextProvider = ({children})=>{

    const [formData,setFormData] = useState(
        [
          
        ]
      )

function handleSubmit (event){

    event.preventDefault();


    alert ('Form Submitted')

    console.log (formData)

    sendEditedCar();

}



function sendEditedCar(){


    // const apiURl = 'http://localhost:3000/api/EditedCars'
     const apiURl = `${API_URL}/api/EditedCars`

    fetch (apiURl, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
       
        body : JSON.stringify(formData)

    })



}
    return <EditedCarContext.Provider value = {{formData,setFormData,handleSubmit}}>
    
    {children}
    
    </EditedCarContext.Provider>
}

export default EditedCarContextProvider;