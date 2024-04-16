import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/productContext.jsx";
import { FilterContextProvider } from "./context/filter_context.jsx";
import  CartContextProvider  from "./context/cart_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>
);
