import "./App.css";
import { HomePage } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import Wishlist from "./components/Wishlist";
import ProductListing from "./components/ProductListing";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
