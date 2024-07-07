import { createContext,useState,useRef } from "react";


export const carGridContext = createContext();


export const CarGridContextProvider = ({children})=>{


    const [carArray, SetCar] = useState([]);
    const carGridRef = useRef();


    

   


    return <carGridContext.Provider value={{carArray,SetCar,carGridRef}}>

        {children}

    </carGridContext.Provider>


}