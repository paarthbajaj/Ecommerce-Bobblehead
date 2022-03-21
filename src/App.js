import "./App.css";
import { HomePage } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import Wishlist from "./components/Wishlist";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Navbar/>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="wishlist" element={<Wishlist />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
