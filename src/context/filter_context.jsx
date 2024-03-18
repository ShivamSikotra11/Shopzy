import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducers/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: false,
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  // console.log(products);

  const [state, dispatch] = useReducer(reducer, initialState);

  // Set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  // aaya aetle add karyu kemke jo [] rakhu to tyare fetch thay jyare aa call thase & aapde bija koi page ma aa products nai madi sake
  // So mane aem joye ke jo products ne access kare to detch thay to [] ni andar products lakhvu padse
  // Basically products par dependent thai jase

  return (
    <FilterContext.Provider value={{ ...state, setGridView }}>
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
