
import React, { createContext, useState,useEffect, useContext } from "react";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [values, setValues] = useState({
    brand: "",
    name: "",
    price: "",
    availability: "",
    location: "",
  });

  const [uploadedFile, setUploadedFile] = useState([]);


  const [mostClickedCar,setMostClickedCar] = useState([]);

  const [mostSearchedCar,setMostSearchedCar] = useState([]);

  const handleFormFileData = async (formData, uploadedFile) => {
    const formData1 = new FormData();

    // Append form data fields
    Object.keys(formData).forEach((key) => {
      formData1.append(key, formData[key]);
    });

    // Append files
    uploadedFile.forEach((file) => {
      formData1.append('uploadedCarFile', file); 
    });

    try {
      const response = await fetch("http://localhost:3000/api/addCar", {
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
    // const mostClickedUrl = `http://10.50.90.120:3000/api/mostClicked`;
    const mostClickedUrl = "http://localhost:3000/api/mostClicked";

  
    async function loadCars() {
      try {
        const response = await fetch(mostClickedUrl);
        const data = await response.json();

        setMostClickedCar(data ? data.cars : []);
        console.log(`most clicked cars data is ${data.cars}`);
      } catch (error) {
        console.error(error);
      }
    }
  
    loadCars();
  }, []);

  useEffect(() => {
    // const mostClickedUrl = `http://10.50.90.120:3000/api/mostClicked`;
    const mostSearchedUrl = "http://localhost:3000/api/searchedCars";

  
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


  
  

  return (
    <CarContext.Provider
      value={{
        uploadedFile,
        setUploadedFile,
        values,
        setValues,
        handleFormFileData,
        mostClickedCar,
        mostSearchedCar
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
