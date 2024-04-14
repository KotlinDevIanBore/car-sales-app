import "./manage-car-component.css";
import { useState, useRef } from "react";

function ManageCars(props) {
  const [values, setValues] = useState({
    brand: "",
    name: "",
    price: "",
    imageURL:""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted with values:", values);
    console.log("Form submitted with value of car:", values.brand);
  }
  return (
    <div>
      <form className="form" onChange={handleChange} onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            className="input"
            placeholder="car brand"
            type="text"
            name="brand"
            value={values.brand}
            // onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <input
            className="input"
            placeholder="car name"
            type="text"
            name="name"
            value={values.name}
            // onChange={handleChange}
          />
        </div>
        
        <div className="input-container">
          <input
            className="input"
            placeholder="car price"
            type="text"
            name="price"
            value={values.price}
            // onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            className="input"
            placeholder="imageURL"
            type="text"
            name="imageURL"
            value={values.imageURL}
            // onChange={handleChange}
          />
        </div>

        {/* Add more input fields here */}
        <button
          onClick={() => {
            props.AddCar(values);
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
