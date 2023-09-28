// Define your getProducts function
const getProducts = () => {
  return fetch("https://dummyjson.com/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
};

export default getProducts;
