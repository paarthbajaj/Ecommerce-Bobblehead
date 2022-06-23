import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useCategoryContext } from "../context/CategoryContext";
import { useProductContext } from "../context/ProductContext";

export const Navbar = () => {
  const location = useLocation();
  const { categoryList, setCategoryPage } = useCategoryContext();
  const { productState, productDispatch } = useProductContext();
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
        {location.pathname == "/products" && (
          <div className="search-bar flex-row">
            <a className="search-icon" href="#">
              <span className="fa fa-search"></span>
            </a>
            <input
              className="input-search-bar"
              placeholder="Search for products"
              value={productState.searchValue}
              onChange={(e) => {
                let searchResult = [];
                let productsListCopy = productState.products;
                for (let i = 0; i < productState.products?.length - 1; i++) {
                  let flag = productsListCopy.find(
                    (note) =>
                      note.title
                        .toLowerCase()
                        .search(e.target.value.toLowerCase()) != -1
                  );
                  if (flag) {
                    productsListCopy = productsListCopy.filter(
                      (i) => i._id !== flag._id
                    );
                    searchResult.push(flag);
                  }
                }
                productDispatch({
                  type: "SET_SEARCH",
                  payload: { value: e.target.value, result: searchResult },
                });
              }}
            />
          </div>
        )}
        <div className="header-actions flex-row">
          <div className="txt-center cursor-pointer action-user">
            <Link to="/products">
              <div className="fa fa-store icon"></div>
              <div className="icon-label">Products</div>
            </Link>
          </div>
          <div className="txt-center cursor-pointer action-wishlist">
            <Link to="/wishlist">
              <div className="fa fa-heart icon">
                <span className="wishlist-cnt flex-row-center-center">
                  {productState.wishlist.length}
                </span>
              </div>
              <div className="icon-label">Wishlist</div>
            </Link>
          </div>
          <div className="txt-center cursor-pointer action-cart">
            <Link to="/cart">
              <div className="fa fa-bag-shopping icon">
                <span className="cart-cnt flex-row-center-center">
                  {productState.cart.length}
                </span>
              </div>
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
