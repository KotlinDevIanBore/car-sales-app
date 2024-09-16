import { API_URL } from "../api";

async function SendSearchRequest(text) {
    
    const apiURl = `${API_URL}/api/search`;

    try {
      const response = await fetch(apiURl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Text: text }),
      });
      console.log("search request sent");

      
      const data = await response.json ();

        return  data;

    } catch (error) {
      console.error("Error sending search request:", error);
      return { error: "Error sending search request" };
    }
  }
export {SendSearchRequest}

async function  SendHomePageRequest (buttonId){

  const apiURl = `${API_URL}/api/homepage/cars`;

  try {
    const response = await fetch  (apiURl, {
      method: "POST",
      headers : {
        "Content-Type": "application/json"
      },
      body : JSON.stringify ({ButtonID: buttonId})
    });

    console.log("home page search request sent");



    const data = await response.json();
    console.log (data);
    return data;

  }

catch (error){
  console.error('Error in thesend homepage request:', error);


}


}

export {SendHomePageRequest};

async function deleteCar (id){
  alert (`handle delete called for car id ${encodeURIComponent(id)}`);

  const apiURL = `${API_URL}/api/v1/car/${id}`

  const response = await fetch (apiURL,{

    method : 'DELETE',
    headers : {
    'Content-Type':  'application/json'
    }
  })

if (response.ok) {

  alert (`Car with ID ${id} deleted successfuly`)
}
else {

  alert (`Error deleting car : ${response.status} ${response.statusText}`)
}

}

export {deleteCar};

async function  getSalesData (){

  const url =  `${API_URL}/api/sales`


  try {

    const response = await fetch (url , {
      method: "GET"
    })

    if (!response.ok){

      throw new Error(`HTTP error! Status: ${response.status}`);

    }

    const data = await response.json();

    return data;

  }
  catch (error){

    console.error('Error hitting the sales endpoint')
    throw error;
  }
}

export {getSalesData};