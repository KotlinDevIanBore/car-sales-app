const fetcher = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return console.error("Error fetching data:", error);
  }
};

const apiUrl = "http://localhost:3000/api/cars";
const fetchData = async () => {
    try {
      const CARS = await fetcher(apiUrl);
      console.log('Fetched data:', CARS);
      return CARS;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
export default  fetchData();
