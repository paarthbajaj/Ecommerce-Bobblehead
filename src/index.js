import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CategoryContextProvider } from "./context/CategoryContext";
import { ProductContextProvider } from "./context/ProductContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductContextProvider>
      <CategoryContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CategoryContextProvider>
    </ProductContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
