
import React, { useState, useEffect, memo, useContext } from "react";
import fetchData from "../car-grid-component/car-grid-component-resource";
import { carGridContext } from "../car-grid-component/car-grid-context";
import { PenIcon } from "../../icons.jsx/penicon";
import { EditedCarContext } from "./edit-car-context";

import styles from './edit-car.module.css';


const EditCar = ()=>{

    const {carArray,SetCar}=useContext (carGridContext);
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editId,setEditId] = useState(false);
  const [edit,setEdit] = useState(false);
  const {formData,setFormData,handleSubmit} = useContext(EditedCarContext)



  function handleEditClick (carid){

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

   
function  handleChange(e){

  const {name,value} = e.target;
  const carID = e.target.dataset.carId;


   setFormData ({...formData, [name]:value,carId:carID})
}


    return <div>

        {carArray.map((car)=>(
            <div className= {styles.flexbox}  justify="center" align="middle">
            <div className= {styles.flexbox_item}>
              <div style={{ width: "100%", height: "100%" }}>
                <p className= {styles.most_clicked_car_name}>
                  {car.brand} {car.name}
                </p>
                <button onClick={ ()=>{handleEditClick(car.id)} } className= {styles.car_clicks} > <PenIcon/> {car.clicks}</button>
                <img className= {styles.car_image1}    src={car.image[0].URL} alt="" />
              </div>
            </div>

            {editId===car.id && edit && 
            
            
            <form onSubmit={handleSubmit}>
     
      <label>
        Brand:
        <input type="text" name="brand" data-car-id ={car.id} defaultValue={car.brand} onChange={handleChange} />
      </label>
      <label>
        Name:
        <input type="text" name="name" data-car-id ={car.id} defaultValue={car.name} onChange={handleChange} />
      </label>
      <label>
        Price:
        <input type="any" name="price" data-car-id ={car.id} defaultValue={car.price} onChange={handleChange} />
      </label>
      <label>
        Availability:
        <input type="any" name="availability" data-car-id ={car.id} defaultValue={car.availability} onChange={handleChange} />
      </label>
      <label>
        Location:
        <input type="any" name="location"  data-car-id ={car.id} defaultValue={car.location} onChange={handleChange} />
      </label>
      <button type="submit">Save Changes</button>
    </form>
}
            
          </div>
    ))}
    </div>
}

export default EditCar;