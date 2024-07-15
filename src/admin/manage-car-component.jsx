import React from 'react';
import "./manage-car-component.css";
import { useContext } from "react";
import { CarContext } from "./manage-car-context";

function ManageCars() {
  const {
    values,
    setValues,
    uploadedFile,
    setUploadedFile,
    handleFormFileData
  } = useContext(CarContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFile((prevFiles) => [...prevFiles, ...files]);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setValues({
      brand: "",
      name: "",
      price: "",
      availability: "",
      location: "",
    });

    const formData = {
      brand: values.brand,
      name: values.name,
      price: values.price,
      availability: values.availability,
      location: values.location,
    };
    if (!values.brand || !values.name || !values.price || !values.location) {
      alert("Fill all the form data");
    }

    handleFormFileData(formData, uploadedFile);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            className="input"
            placeholder="car brand"
            type="text"
            name="brand"
            value={values.brand}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <input
            className="input"
            placeholder="car name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <input
            className="input"
            placeholder="car price"
            type="text"
            name="price"
            value={values.price}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            className="input"
            placeholder="availabilty"
            type="text"
            name="availability"
            value={values.availability}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            className="input"
            placeholder="location"
            type="text"
            name="location"
            value={values.location}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <input
            className="input"
            multiple
            type="file"
            onChange={handleFileChange}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="add-car-button"
          type="submit"
        >
          Add Car
        </button>
      </form>
    </div>
  );
}

export default ManageCars;
