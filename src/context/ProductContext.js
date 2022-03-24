import axios from "axios";
import React from "react";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";

const ProductContext = createContext();
const useProductContext = () => useContext(ProductContext);

const ProductContextProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    (async () => {
      const productData = await axios.get("/api/products");
      setProductsList(productData.data.products);
    })();
  }, []);

  const productReducer = (state, action) => {
    switch (action.type) {
      case "addToCart":
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      case "removeFromCart":
        return {
          ...state,
          cart: state.cart.filter((item) => item._id !== action.payload._id),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(productReducer, {
    cart: [],
  });

  return (
    <ProductContext.Provider value={{ productsList, state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContextProvider, useProductContext };
