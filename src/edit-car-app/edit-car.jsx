import React, { useState, useEffect, memo, useContext } from "react";
import fetchData from "../car-grid-component/car-grid-component-resource";
import { carGridContext } from "../car-grid-component/car-grid-context";
import { EditedCarContext } from "./edit-car-context";
import SearchIcon from "../home-page/search_button";
import PenIcon from "../../icons.jsx/penicon";

import styles from './edit-car.module.css';


const EditCar = ()=>{

    const {carArray,SetCar}=useContext (carGridContext);
    const {formData,setFormData,handleSubmit,edit,setEdit,handleDelete} = useContext(EditedCarContext);
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editId,setEditId] = useState(false);
  
  console.log (`car array in edit functionality is ${carArray}`)



  function handleEditClick (car){

const carid = car.id;

    setEditId (carid)
    setEdit(!edit)
  }

    useEffect(() => {
        const loadCars = async () => {
          try {
            const fetchedCars = await fetchData();
            const carsWithIndex = fetchedCars.map(car => ({
              ...car,
              imageIndex: 0
            }));
            SetCar(carsWithIndex);
          } catch (err) {
            setError(err);
          } finally {
            setLoading(false);
          }
        };
    
        loadCars();
      }, []);

   
function  handleChange (e,car){

  const {name,value} = e.target;
  console.log (car[name]);

  
  const carID = car.id;




  

  setFormData((prevFormData) => {


    return { ...prevFormData, ...car, [name]: value };

   
  });

  

}


    return  <div>

      <div>Edit Cars</div>
      <SearchIcon/>
      <div className="overflow-y-auto h-[90vh]">

{carArray.map((car)=>(
    <div className= {styles.flexbox}  justify="center" align="middle">
    <div className= {styles.flexbox_item}>
      <div style={{ width: "100%", height: "100%" }}>
        <p className= {styles.most_clicked_car_name}>
          {car.brand} {car.name}
        </p>
        <button onClick={ ()=>{handleEditClick(car)} } className= {styles.car_clicks} > <PenIcon/>  </button>
        <img className= {styles.car_image1}    src={car.image[0].URL} alt="" />
      </div>
    </div>



    {editId===car.id && edit && 
     
    
    <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md mx-auto p-4">
  <label className="block mb-4">
    Brand:
    <input type="text" name="brand" defaultValue={car.brand} onChange={(e) => {handleChange(e, car)}} className="block w-full p-2 border border-gray-300 rounded" />
  </label>
  <label className="block mb-4">
    Name:
    <input type="text" name="name" defaultValue={car.name} onChange={(e) => {handleChange(e, car)}} className="block w-full p-2 border border-gray-300 rounded" />
  </label>
  <label className="block mb-4">
    Price:
    <input type="any" name="price" defaultValue={car.price} onChange={(e) => {handleChange(e, car)}} className="block w-full p-2 border border-gray-300 rounded" />
  </label>
  <label className="block mb-4">
    Availability:
    <input type="any" name="availability" defaultValue={car.availability} onChange={(e) => {handleChange(e, car)}} className="block w-full p-2 border border-gray-300 rounded" />
  </label>
  <label className="block mb-4">
    Location:
    <input type="any" name="location" defaultValue={car.location} onChange={(e) => {handleChange(e, car)}} className="block w-full p-2 border border-gray-300 rounded" />
  </label>

  <label className="block mb-4">
    Cohort:
    <input type="any" name="cohort" defaultValue={car.cohort} onChange={(e) => {handleChange(e, car)}} className="block w-full p-2 border border-gray-300 rounded" />
  </label>

  <label className="block mb-4">
    Year of Manufacture:
    <input type="any" name="year" defaultValue={car.year} onChange={(e) => {handleChange(e, car)}} className="block w-full p-2 border border-gray-300 rounded" />
  </label>
  <label className="block mb-4">
    Description
    <input type="any" name="description" defaultValue={car.description} onChange={(e) => {handleChange(e, car)}} className="block w-full p-2 border border-gray-300 rounded" />
  </label>

  

 <button type="button" className=" bg-red-500 my-3  py-2 px-4" onClick={ ()=>{handleDelete(car.id)}} >Delete Car</button>

  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save Changes</button>
</form>
}
   
  </div>
))}
</div>


    </div>
    
}

export default EditCar;