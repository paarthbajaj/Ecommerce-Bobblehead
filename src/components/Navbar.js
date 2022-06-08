import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCategoryContext } from "../context/CategoryContext";

export const Navbar = () => {
  const { categoryList } = useCategoryContext();
  return (
    <>
      <header className="desktop-header-container flex-row">
        <div className="logo-container brand-logo">Quirky Face</div>
        <nav className="top-navbar">
          {categoryList &&
            categoryList.map((item) => (
              <a className="nav-items" href="#" key={item._id}>
                {item.categoryName}
              </a>
            ))}
        </nav>
        <div className="search-bar flex-row">
          <a className="search-icon" href="#">
            <span className="fa fa-search"></span>
          </a>
          <input
            className="input-search-bar"
            placeholder="Search for products, categories and more"
          />
        </div>
        <div className="header-actions flex-row">
          <div className="txt-center cursor-pointer action-user">
            <Link to="/products">
              <div className="fa fa-store icon"></div>
              <div className="icon-label">Products</div>
            </Link>
          </div>
          <div className="txt-center cursor-pointer action-wishlist">
            <Link to="/wishlist">
              <div className="fa fa-heart icon"></div>
              <div className="icon-label">Wishlist</div>
            </Link>
          </div>
          <div className="txt-center cursor-pointer action-cart">
            <Link to="/cart">
              <div className="fa fa-bag-shopping icon"></div>
              <div className="icon-label">Bag</div>
            </Link>
          </div>
          <div className="txt-center cursor-pointer action-cart">
            <a href="./signout.html">
              <div className="fa fa-arrow-right-from-bracket col-red"></div>
            </a>
            <div className="icon-label col-red">Logout</div>
          </div>
        </div>
      </header>
    </>
  );
};
