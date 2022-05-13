import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCategoryContext } from "../context/CategoryContext";

export const Navbar = () => {
  const { categoryList, setCategoryPage } = useCategoryContext();
  return (
    <>
      <header className="desktop-header-container flex-row">
        <div className="logo-container brand-logo">
          <Link to="/home">Quirky Face</Link>
        </div>

        <nav className="top-navbar">
          {categoryList &&
            categoryList.map((item) => (
              <span
                className="nav-items"
                key={item._id}
                onClick={() => setCategoryPage(item.categoryName)}
              >
                <Link to={`/category/${item.categoryName}`}>
                  {item.categoryName}
                </Link>
              </span>
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
            <div className="fa fa-user icon"></div>
            <div className="icon-label">Profile</div>
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
            <Link to="/signedout" onClick={() => localStorage.clear()}>
              <div className="fa fa-arrow-right-from-bracket col-red"></div>
              <div className="icon-label col-red">Logout</div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
