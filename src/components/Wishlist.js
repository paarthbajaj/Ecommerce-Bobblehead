import "./Wishlist.css";
import "./ProductListing.css";
import { useProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const {
    productState: { wishlist },
    productDispatch,
    toast,
    setToast,
    addToCart,
  } = useProductContext();
  return (
    <div>
      {wishlist.length > 0 ? (
        <main className="page-wrapper">
          <div className="wishlist-header pl-3">
            <h1>My Wishlist 💖</h1>
          </div>
          <div className="wishlist-products flex-row flex-wrap pt-1 pl-3 pr-3 gap-2">
            {wishlist &&
              wishlist.map((item) => (
                <div className="product-card m-radius">
                  <div className="img-wrap"></div>
                  <img className="card-img" src={item.productImage} />

                  <div className="card-content">
                    <h3 className="cursor-pointer">{item.title}</h3>
                    <h4>₹{item.price}</h4>
                    <button
                      className="remove-btn txt-6 cursor-pointer"
                      onClick={() => {
                        productDispatch({
                          type: "REMOVE_FROM_WISHLIST",
                          payload: item,
                        });
                        setToast({
                          ...toast,
                          showToast: true,
                          type: "alert-danger",
                          message: "Product removed from wishlist",
                        });
                      }}
                    >
                      Remove
                    </button>
                  </div>
                  <button
                    className="btn btn-secondary pd-btn"
                    onClick={() => addToCart(item)}
                  >
                    <i className="fa fa-bag-shopping"></i>
                    Add
                  </button>
                </div>
              ))}
          </div>
        </main>
      ) : (
        <div className="empty-cart page-wrapper flex-column align-center justify-center">
          <span className="h5 mt-1">Nothing in the wishlist</span>
          <Link to="/products">
            <button className="ecom-pri-btn mt-1">Start adding now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
