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