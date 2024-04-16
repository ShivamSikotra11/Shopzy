const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, color, amount, product } = action.payload;
      let existingProduct = state.cart.find((item) => item.id === id + color);
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === id + color) {
              let newAmount = item.amount + amount;
              if (newAmount > item.max) {
                newAmount = item.max;
              }
              return { ...item, amount: newAmount };
            } else {
              return item;
            }
          }),
        }
      }
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,//as if key,value same we can write like this
        amount,
        image: product.image[0].url,
        price:product.price,
        max:product.stock,
      }
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      }
    case "REMOVE_ITEM": 
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      }
    case "CLEAR_CART": 
      return {
        ...state,
        cart: [],
      }
    default:
      return state;
  }
};
export default cartReducer;
