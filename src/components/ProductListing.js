import "./ProductListing.css";
import { useCategoryContext } from "../context/CategoryContext";
import { useProductContext } from "../context/ProductContext";

const ProductListing = () => {
  const { categoryList } = useCategoryContext();
  const { state, dispatch, productsList } = useProductContext();

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
            {categoryList &&
              categoryList.map((item) => (
                <>
                  <label key={item._id}>
                    <input type="radio" name="categories" />
                    {item.categoryName}
                  </label>
                </>
              ))}
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
            {productsList.map((item) => (
              <div className="product-card m-radius" key={item._id}>
                <div className="img-wrap"></div>
                <img className="card-img" src={item.productImage} />
                <div className="card-content">
                  <h3 className="cursor-pointer">{item.title}</h3>
                  <h4>₹{item.price}</h4>
                </div>
                <button
                  className="btn btn-secondary pd-btn"
                  onClick={() => dispatch({ type: "addToCart", payload: item })}
                >
                  <i className="fa fa-bag-shopping"></i>
                  Add
                </button>
                <i className="fa fa-heart icon pd-wish-icon cursor-pointer"></i>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductListing;
