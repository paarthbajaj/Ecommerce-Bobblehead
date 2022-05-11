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

const ProductContextProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  const [priceFilter, setPriceFilter] = useState(50);
  const [toast, setToast] = useState({
    showToast: true,
    type: "",
    message: "",
  });
  const productReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ALL_PRODUCTS":
        return { ...state, products: action.payload };
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item._id !== action.payload._id),
        };
      case "SET_PRODUCT_QUANTITY":
        return {
          ...state,
          cart: state.cart.map((i) =>
            i._id === action.payload.item._id
              ? { ...i, quantity: action.payload.quantity }
              : i
          ),
        };
      case "ADD_TO_WISHLIST":
        return { ...state, wishlist: [...state.wishlist, action.payload] };
      case "REMOVE_FROM_WISHLIST":
        return {
          ...state,
          wishlist: state.wishlist.filter(
            (item) => item._id !== action.payload._id
          ),
        };
      case "FILTER_PRICE":
        setPriceFilter(() => action.payload.value);
        return {
          ...state,
          products: action.payload.list.filter(
            (c) => c.price <= action.payload.value
          ),
        };
      case "LOW_TO_HIGH":
        return {
          ...state,
          products: action.payload.sort((a, b) => {
            return a.price - b.price;
          }),
        };
      case "HIGH_TO_LOW":
        return {
          ...state,
          products: action.payload.sort((a, b) => {
            return b.price - a.price;
          }),
        };
      case "CATEGORY_SORT":
        return {
          ...state,
          products: action.payload.list.filter(
            (c) => c.categoryName === action.payload.item.categoryName
          ),
        };
      case "RATING":
        return {
          ...state,
          products: state.products.filter(
            (r) => r.rating >= action.payload.item
          ),
        };
      case "CLEAR":
        window.location.reload(false);
    }
  };
  const [productState, productDispatch] = useReducer(productReducer, {
    cart: [],
    wishlist: [],
    products: productsList,
  });
  useEffect(() => {
    (async () => {
      try {
        const productData = await axios.get("/api/products");
        productState.products.length === 0 &&
          productDispatch({
            type: "ADD_ALL_PRODUCTS",
            payload: productData.data.products,
          });
        setProductsList(productData.data.products);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const addToCart = (item) => {
    let flagCart;
    productState?.cart?.find((i) => {
      if (i._id === item._id) flagCart = true;
    });
    if (!flagCart) {
      productDispatch({ type: "ADD_TO_CART", payload: item });
      setToast({
        ...toast,
        showToast: true,
        type: "alert-success",
        message: "Product added into cart",
      });
    }
  };
  const addToWishlist = (item) => {
    let flagWishlist;
    productState?.wishlist?.find((i) => {
      if (i._id === item._id) flagWishlist = true;
    });
    if (!flagWishlist) {
      productDispatch({
        type: "ADD_TO_WISHLIST",
        payload: item,
      });
      setToast({
        ...toast,
        showToast: true,
        type: "alert-success",
        message: "Product added into wishlist",
      });
    }
  };

  return (
    <ProductContext.Provider
      value={{
        priceFilter,
        productsList,
        productState,
        productDispatch,
        toast,
        setToast,
        addToCart,
        addToWishlist,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
const useProductContext = () => useContext(ProductContext);

export { ProductContextProvider, useProductContext };
