import React, { useState, useEffect, memo, useContext } from "react";
import fetchData from "../car-grid-component/car-grid-component-resource";
import { carGridContext } from "../car-grid-component/car-grid-context";
import { EditedCarContext } from "./edit-car-context";

import styles from './edit-car.module.css';


const EditCar = ()=>{

    const {carArray,SetCar}=useContext (carGridContext);
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editId,setEditId] = useState(false);
  const [edit,setEdit] = useState(false);
  const {formData,setFormData,handleSubmit} = useContext(EditedCarContext)



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

  // setFormData((prevFormData) => ({
  //   ...prevFormData,
  //   ...car,
  //   [name]: value
  // }));

}


    return  <div>

      <div>Edit Cars</div>
      <div className="overflow-y-auto h-[90vh]">

{carArray.map((car)=>(
    <div className= {styles.flexbox}  justify="center" align="middle">
    <div className= {styles.flexbox_item}>
      <div style={{ width: "100%", height: "100%" }}>
        <p className= {styles.most_clicked_car_name}>
          {car.brand} {car.name}
        </p>
        <button onClick={ ()=>{handleEditClick(car)} } className= {styles.car_clicks} > edit  </button>
        <img className= {styles.car_image1}    src={car.image[0].URL} alt="" />
      </div>
    </div>

    {editId===car.id && edit && 
    
    
    <form onSubmit={handleSubmit}>

<label>
Brand:
<input type="text" name="brand"  defaultValue={car.brand} onChange={ (e) => {handleChange (e,car)} } />
</label>
<label>
Name:
<input type="text" name="name"  defaultValue={car.name} onChange={ (e) => {handleChange (e,car)} } />
</label>
<label>
Price:
<input type="any" name="price"  defaultValue={car.price} onChange={ (e) => {handleChange (e,car)} } />
</label>
<label>
Availability:
<input type="any" name="availability"  defaultValue={car.availability} onChange={ (e) => {handleChange (e,car)} } />
</label>
<label>
Location:
<input type="any" name="location"   defaultValue={car.location} onChange={ (e) => {handleChange (e,car)} } />
</label>
<button type="submit">Save Changes</button>
</form>
}
   
  </div>
))}
</div>


    </div>
    
}

export default EditCar;