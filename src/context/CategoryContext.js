import axios from "axios";
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";

const CategoryContext = createContext();
const useCategoryContext = () => useContext(CategoryContext);

const CategoryContextProvider = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [categoryPage, setCategoryPage] = useState();
  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get("/api/categories");
        setCategoryList(data.data.categories);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <CategoryContext.Provider
      value={{ categoryList, categoryPage, setCategoryPage }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContextProvider, useCategoryContext };
