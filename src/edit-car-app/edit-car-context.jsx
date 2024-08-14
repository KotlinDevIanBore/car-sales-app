import { createContext } from "react";
import React, { useState, useEffect, memo, useContext } from "react";
import fetchData from "../car-grid-component/car-grid-component-resource";
import { carGridContext } from "../car-grid-component/car-grid-context";
import { API_URL } from "../../api";


export const EditedCarContext = createContext ();


const EditedCarContextProvider = ({children})=>{

    const {carArray,SetCar}=useContext (carGridContext);


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


     const apiURl = `${API_URL}/api/EditedCars`

    fetch (apiURl, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
       
        body : JSON.stringify(formData)

    })



}
    return <EditedCarContext.Provider value = {{formData,setFormData,handleSubmit,carArray,SetCar}}>
    
    {children}
    
    </EditedCarContext.Provider>
}

export default EditedCarContextProvider;