
import React, { createContext, useState } from "react";

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
        body: formData1, // Send FormData directly as the body
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

  return (
    <CarContext.Provider
      value={{
        uploadedFile,
        setUploadedFile,
        values,
        setValues,
        handleFormFileData
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
