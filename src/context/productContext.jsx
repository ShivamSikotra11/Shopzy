// Create a Context
// A Provider
// Consumer => useContext Hook

import axios from "axios";
import { createContext, useContext, useEffect } from "react";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";
// axios returns promise
const AppProvider = ({ children }) => {
  const getProducts = async (url) => {
    try {
      const res = await axios.get(API);
      const products = await res.data;
      console.log(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider value={{ MyName: "Shivam Sikotra" }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hooks
const useProductContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useProductContext };
export default AppContext;
