import "./ProductListing.css";

const ProductListing = () => {
  return (
    <div>
      <main className="page-wrapper">
        <div className="filter-container m-radius flex-column">
          <div className="product-sort flex-column l-radius">
            <h2>Price</h2>
            <input type="range" list="price" />
            <datalist id="price">
              <option value="0"></option>
              <option value="50"></option>
              <option value="100"></option>
            </datalist>
          </div>
          <div className="product-sort flex-column l-radius">
            <h2>Sort by</h2>
            <label>
              <input type="radio" name="sort" />
              Low to High
            </label>
            <label>
              <input type="radio" name="sort" />
              High To Low
            </label>
          </div>
          <div className="product-sort flex-column l-radius">
            <h2>Categories</h2>
            <label>
              <input type="radio" name="categories" />
              Marvel
            </label>
            <label>
              <input type="radio" name="categories" />
              DC
            </label>
            <label>
              <input type="radio" name="categories" />
              Anime
            </label>
            <label>
              <input type="radio" name="categories" />
              Keychains
            </label>
            <label>
              <input type="radio" name="categories" />
              Football
            </label>
            <label>
              <input type="radio" name="categories" />
              Pokemon
            </label>
          </div>
          <div className="product-sort flex-column l-radius">
            <h2>Rating</h2>
            <label>
              <input type="radio" name="rating" />4 Stars & above
            </label>
            <label>
              <input type="radio" name="rating" />3 Stars & above
            </label>
            <label>
              <input type="radio" name="rating" />2 Stars & above
            </label>
            <label>
              <input type="radio" name="rating" />1 Star & above
            </label>
          </div>
        </div>
        <div className="products-listing">
          <div className="list-container flex-row">
            <div className="product-card m-radius">
              <div className="img-wrap"></div>
              <img
                className="card-img"
                src="./assets/images/captain-america-bobblehead.jpg"
              />
              <div className="card-content">
                <h3 className="cursor-pointer">Product 1</h3>
                <h4>₹299</h4>
              </div>
              <button className="btn btn-secondary pd-btn">
                <i className="fa fa-bag-shopping"></i>
                Add
              </button>
              <i className="fa fa-heart icon pd-wish-icon cursor-pointer"></i>
            </div>
            <div className="product-card m-radius">
              <div className="img-wrap"></div>
              <img
                className="card-img"
                src="./assets/images/ironman-bobblehead.png"
              />
              <div className="card-content">
                <h3 className="cursor-pointer">Product 1</h3>
                <h4>₹299</h4>
              </div>
              <button className="btn btn-secondary pd-btn">
                <i className="fa fa-bag-shopping"></i>
                Add
              </button>
              <i className="fa fa-heart icon pd-wish-icon cursor-pointer"></i>
            </div>
            <div className="product-card m-radius">
              <div className="img-wrap"></div>
              <img
                className="card-img"
                src="./assets/images/Naruto-bobblehead.jpg"
              />

              <div className="card-content">
                <h3 className="cursor-pointer">Product 1</h3>
                <h4>₹299</h4>
              </div>
              <button className="btn btn-secondary pd-btn">
                <i className="fa fa-bag-shopping"></i>
                Add
              </button>
              <i className="fa fa-heart icon pd-wish-icon cursor-pointer"></i>
            </div>
            <div className="product-card m-radius">
              <div className="img-wrap"></div>
              <img
                className="card-img"
                src="./assets/images/pikachu-bobblehead.jpg"
              />

              <div className="card-content">
                <h3 className="cursor-pointer">Product 1</h3>
                <h4>₹299</h4>
              </div>
              <button className="btn btn-secondary pd-btn">
                <i className="fa fa-bag-shopping"></i>
                Add
              </button>
              <i className="fa fa-heart icon pd-wish-icon cursor-pointer"></i>
            </div>
            <div className="product-card m-radius">
              <div className="img-wrap"></div>
              <img
                className="card-img"
                src="./assets/images/roanldo-bobblehead.jpg"
              />

              <div className="card-content">
                <h3 className="cursor-pointer">Product 1</h3>
                <h4>₹299</h4>
              </div>
              <button className="btn btn-secondary pd-btn">
                <i className="fa fa-bag-shopping"></i>
                Add
              </button>
              <i className="fa fa-heart icon pd-wish-icon cursor-pointer"></i>
            </div>
            <div className="product-card m-radius">
              <div className="img-wrap"></div>
              <img
                className="card-img"
                src="./assets/images/Shinchan-bobblehead.jpg"
              />

              <div className="card-content">
                <h3 className="cursor-pointer">Product 1</h3>
                <h4>₹299</h4>
              </div>
              <button className="btn btn-secondary pd-btn">
                <i className="fa fa-bag-shopping"></i>
                Add
              </button>
              <i className="fa fa-heart icon pd-wish-icon cursor-pointer"></i>
            </div>
            <div className="product-card m-radius">
              <div className="img-wrap"></div>
              <img className="card-img" src="./assets/images/krillin.jpg" />

              <div className="card-content">
                <h3 className="cursor-pointer">Product 1</h3>
                <h4>₹299</h4>
              </div>
              <button className="btn btn-secondary pd-btn">
                <i className="fa fa-bag-shopping"></i>
                Add
              </button>
              <i className="fa fa-heart icon pd-wish-icon cursor-pointer"></i>
            </div>
            <div className="product-card m-radius">
              <div className="img-wrap"></div>
              <img className="card-img" src="./assets/images/batman.jpg" />

              <div className="card-content">
                <h3 className="cursor-pointer">Product 1</h3>
                <h4>₹299</h4>
              </div>
              <button className="btn btn-secondary pd-btn">
                <i className="fa fa-bag-shopping"></i>
                Add
              </button>
              <i className="fa fa-heart icon pd-wish-icon cursor-pointer"></i>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductListing;
