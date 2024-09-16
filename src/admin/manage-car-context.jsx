
import React, { createContext, useState,useEffect, useContext } from "react";
import { API_URL } from "../../api";
import { getSalesData } from "../api";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [values, setValues] = useState({
    brand: "",
    name: "",
    price: "",
    availability: "",
    location: "",
    cohort:""
  });

  const [uploadedFile, setUploadedFile] = useState([]);


  const [mostClickedCar,setMostClickedCar] = useState([]);

  const [mostSearchedCar,setMostSearchedCar] = useState([]);

  const [clickLogData,setclickLogData] = useState ([]);
  const [salesData,setsalesData] = useState ([])

  const handleFormFileData = async (formData, uploadedFile) => {
    const formData1 = new FormData();

   
    Object.keys(formData).forEach((key) => {
      formData1.append(key, formData[key]);
    });                                                                                                                                                                                                    

    
    uploadedFile.forEach((file) => {
      formData1.append('uploadedCarFile', file); 
    });

    try {
      
      const addCarURL = `${API_URL}/api/addCar`;


      const response = await fetch(addCarURL, {
        method: "POST",
        body: formData1, 
      });

      if (!response.ok) {
        throw new Error("Failed to add car");
      } else {
        alert('Car Added Successfully');
      }

      const data = await response.json();
      console.log("Success:", data);

      setUploadedFile([])

    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const mostClickedUrl = `${API_URL}/api/mostClicked`;

  
    async function loadCars() {
      try {
        const response = await fetch(mostClickedUrl);
        const data = await response.json();

        setMostClickedCar(data ? data.cars : []);
        
      } catch (error) {
        console.error(error);
      }
    }
  
    loadCars();
  }, []);

  useEffect(() => {
    const mostSearchedUrl = `${API_URL}/api/searchedCars`;


  
    async function loadCars() {
      try {
        const response = await fetch(mostSearchedUrl);
        const data = await response.json();

        setMostSearchedCar(data ? data.cars : []);
        console.log(`most searched cars data is ${data.cars}`);
      } catch (error) {
        console.error(error);
      }
    }
  
    loadCars();
  }, []);


  useEffect(()=>{

    async function loadClickLogs (){


      const loadClicksURL = `${API_URL}/api/click-logs`;
  
  
      const response = await fetch (loadClicksURL);
  
      const clickData = await response.json();
  
      setclickLogData(clickData?clickData.data:[])
  
    }

    loadClickLogs()
  },[])

  useEffect(() => {

  
    async function loadCars() {
      try {
const salesdata = await getSalesData ();
console.log (`Your sales data is ${salesdata}`)
        setsalesData (salesdata?salesdata:[])
        
      } catch (error) {
        console.error(error);
      }
    }
  
    loadCars();
  }, []);


  
  

  return (
    <CarContext.Provider
      value={{
        uploadedFile,
        setUploadedFile,
        values,
        setValues,
        handleFormFileData,
        mostClickedCar,
        mostSearchedCar,
        clickLogData,
        setclickLogData,
        salesData,
        setsalesData
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
