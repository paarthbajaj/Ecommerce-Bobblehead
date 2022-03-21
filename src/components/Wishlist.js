import "./Wishlist.css";
import "./ProductListing.css";

const Wishlist = () => {
  return (
    <div>
      <main className="page-wrapper">
        <div className="wishlist-header pl-3">
          <h1>My Wishlist 💖</h1>
        </div>
        <div className="wishlist-products flex-row flex-wrap pt-1 pl-3 pr-3 gap-2">
          <div className="product-card m-radius">
            <div className="img-wrap"></div>
            <img
              className="card-img"
              src="./assets/images/shinchan-bobblehead.jpg"
            />

            <div className="card-content">
              <h3 className="cursor-pointer">Ronaldo Bobblehead</h3>
              <h4>₹299</h4>
              <button className="remove-btn txt-6 cursor-pointer">
                Remove
              </button>
            </div>
            <button className="btn btn-secondary pd-btn">
              <i className="fa fa-bag-shopping"></i>
              Move
            </button>
          </div>
          <div className="product-card m-radius">
            <div className="img-wrap"></div>
            <img className="card-img" src="./assets/images/krillin.jpg" />

            <div className="card-content">
              <h3 className="cursor-pointer">Ronaldo Bobblehead</h3>
              <h4>₹299</h4>
              <button className="remove-btn txt-6 cursor-pointer">
                Remove
              </button>
            </div>
            <button className="btn btn-secondary pd-btn">
              <i className="fa fa-bag-shopping"></i>
              Move
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wishlist;
