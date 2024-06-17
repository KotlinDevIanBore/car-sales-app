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
  const handleFormData = async (formData) => {
    console.log("Form Data:", formData);

    try {
      const response = await fetch("http://localhost:3000/api/addCar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add car");
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Feilya:", error);
    }
  };

  const handleFileData = async (uploadedFile) => {
    const formData = new FormData();

    uploadedFile.map ((file)=>(
      formData.append('uploadedCarFile',file)
    ))


    try {
      const response = await fetch("http://localhost:3000/api/uploadCar", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("File uploaded successfully");
      } else {
        console.log("File upload failed");
      }
    } catch (error) {
      console.log("Problem in file upload");
    }
  };

  return (
    <CarContext.Provider
      value={{
        uploadedFile,
        setUploadedFile,
        values,
        setValues,
        handleFormData,
        handleFileData,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
