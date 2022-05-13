import "./App.css";
import { HomePage } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import Wishlist from "./components/Wishlist";
import ProductListing from "./components/ProductListing";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Cart from "./components/Cart";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Signout } from "./pages/Signout";
import { useProductContext } from "./context/ProductContext";
import { useEffect } from "react";
import { CategoryPage } from "./components/CategoryPage";
import { Toast } from "./components/Toast";

function App() {
  let location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/signedout" && <Navbar />}
      <Toast />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/category/:categoryLabel" element={<CategoryPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signedout" element={<Signout />} />
      </Routes>
      {location.pathname !== "/" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/signedout" && <Footer />}
    </div>
  );
}

export default App;
