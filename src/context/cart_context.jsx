import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/cartReducer';

const cartContext = createContext();
const initialItems = {
  cart: JSON.parse(localStorage.getItem("cart")),
  total_items:"",
  total_amount:"",
  shipping_fees:50000,
};
const cartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialItems);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  }
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload:id });
  }
  const clearCart = () => {
    dispatch({type:"CLEAR_CART"})
  }

  // Adding cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);


  return (
    <cartContext.Provider value={{...state,addToCart,removeItem,clearCart}} >
      {children}
    </cartContext.Provider>
  )
}
export const useCartContext = () => {
  return useContext(cartContext);
}
export default cartProvider;