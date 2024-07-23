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

const apiUrl = "http://localhost:3000/api/cars";
// const apiUrl = "http://10.50.90.120:3000/api/cars";
const fetchData = async () => {
  try {
    const CARS = await fetcher(apiUrl);
    return CARS;
  } catch (error) {
    console.error('Error fetching data:', error);

    
  }
};

export default fetchData;
