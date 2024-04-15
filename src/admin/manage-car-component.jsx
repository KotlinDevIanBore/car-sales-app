import "./manage-car-component.css";
import { useState, useRef } from "react";

function ManageCars(props) {
  const [values, setValues] = useState({
    brand: "",
    name: "",
    price: "",
  
  });
const [selectedFile, setselectedFile]= useState (null);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }
  const handleFileChange = (event) => {
    setselectedFile(event.target.files[0]);
    console.log (event.target.files[0])
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted with values:", values);
    console.log("Form submitted with value of car:", values.brand);
  }
  return (
    <div>
      <form className="form"  onSubmit={handleSubmit}>
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
            type="file"
            // value={selectedFile}
            onChange={handleFileChange}
          />
        </div>

        {/* Add more input fields here */}
        <button
          onClick={() => {
            props.AddCar({ ...values, file: selectedFile });
          }}
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
