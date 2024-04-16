import "./manage-car-component.css";
import { useState, useEffect } from "react";

function ManageCars(props) {
  const [values, setValues] = useState({
    brand: "",
    name: "",
    price: "",
  });
  // const [selectedFile, setselectedFile] = useState(null);
  const [imageURL, setimageURL] = useState([]);
  const [imageURLs, setimageURLs] = useState([]);

  

  function handleChange(e) {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));

    
  }

  const handleFileChange = event => {
    const files = event.target.files;
    const URLs = Array.from(files).map(file => ({
      URL: URL.createObjectURL(file),
    }));

    setimageURL((prevURLs)=>[...prevURLs,...URLs]);


    // setselectedFile(event.target.files);
    console.log(event.target.files[0]);
    
      setimageURLs(imageURL.map(item => item.URL));
    
  };

  function handleSubmit(e) {
    e.preventDefault();
    setValues ({brand:"",name:"", price:""})
    // setselectedFile(null)
    setimageURL ([])
    setimageURLs([]);

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
            multiple
            type="file"
            onChange={handleFileChange}
          />
        </div>

        <button
          onClick={() => {
            props.AddCar({ ...values, imageURLs: imageURLs });
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
