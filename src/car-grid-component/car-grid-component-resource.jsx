
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

// const apiUrl = "http://localhost:3000/api/cars";
//const apiURL = "https://car-sales-app-server.onrender.com/api/cars"
const apiUrl = `${API_URL}/api/cars`;

const fetchData = async () => {
  try {
    const CARS = await fetcher(apiUrl);
    return CARS;
  } catch (error) {
    console.error('Error fetching data:', error);

    
  }
};

export default fetchData;
