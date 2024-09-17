
import { API_URL } from "../../api";



const fetcher = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};



const fetchData = async (limit,offset) => {

  

  const apiUrl = `${API_URL}/api/cars`;
const apiUrlv1 = `${API_URL}/api/v1/cars?offset=${offset}&limit= ${limit}`;

  
  try {
    // const CARS = await fetcher(apiUrlv1);
    const CARS = await fetcher(apiUrl);

    return CARS;
  } catch (error) {
    console.error('Error fetching data:', error);

    
  }
};

export default fetchData;
