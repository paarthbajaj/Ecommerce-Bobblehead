import "./Navbar.css";
import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <>
      <header className="desktop-header-container flex-row">
        <div className="logo-container brand-logo">Quirky Face</div>
        <nav className="top-navbar">
          <a className="nav-items" href="#">
            Marvel
          </a>
          <a className="nav-items" href="#">
            DC
          </a>
          <a className="nav-items" href="#">
            Anime
          </a>
          <a className="nav-items" href="#">
            Football
          </a>
          <a className="nav-items" href="#">
            Keychains
          </a>
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
            <a href="./cart.html">
              <div className="fa fa-bag-shopping icon"></div>
            </a>
            <div className="icon-label">Bag</div>
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
