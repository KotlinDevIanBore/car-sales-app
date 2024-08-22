import { createContext } from "react";
import { useState } from "react";

const ViewCarContext = createContext();

export {ViewCarContext}



const ViewCarContextProvider = ({children}) =>{

    const [car,SetDisplayCar] = useState ();



    const value ={
        car,
        SetDisplayCar

    }

    return <ViewCarContext.Provider  value= {value} >
     

     {children}

    </ViewCarContext.Provider>
}

export default ViewCarContextProvider; 