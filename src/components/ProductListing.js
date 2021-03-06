import "./ProductListing.css";
import { useCategoryContext } from "../context/CategoryContext";
import { useProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const ProductListing = () => {
  const { categoryList } = useCategoryContext();
  const navigate = useNavigate();
  const {
    priceFilter,
    productState,
    productDispatch,
    productsList,
    addToCart,
    addToWishlist,
  } = useProductContext();
  let productsArray =
    productState.searchValue == ""
      ? productState.products
      : productState.searchResult;
  const ratingSort = (event) => {
    productDispatch({
      type: "RATING",
      payload: {
        productState: productState,
        item: event.target.value,
        list: productsList,
      },
    });
  };

  return (
    <div>
      <main className="page-wrapper">
        <div className="filter-container m-radius flex-column">
          <button
            className="ecom-pri-btn"
            onClick={() => productDispatch({ type: "CLEAR" })}
          >
            Clear Filters
          </button>
          <div className="product-sort flex-column l-radius">
            <h2>Price</h2>
            <input
              type="range"
              min="0"
              max="800"
              step="50"
              list="price"
              onChange={(e) =>
                productDispatch({
                  type: "FILTER_PRICE",
                  payload: {
                    value: parseInt(e.target.value),
                    list: productsList,
                  },
                })
              }
            />
            <datalist id="price">
              <option value="0"></option>
              <option value="400"></option>
              <option value="800"></option>
            </datalist>
            <div className="justify-between flex-row">
              <input
                className="txt-center"
                type="text"
                value="0"
                size={4}
                disabled={true}
              />
              <span>to</span>
              <input
                className="txt-center"
                type="text"
                size={4}
                value={priceFilter}
                disabled={true}
              />
            </div>
          </div>
          <div className="product-sort flex-column l-radius">
            <h2>Sort by</h2>
            <label>
              <input
                type="radio"
                name="sort"
                onClick={() =>
                  productDispatch({
                    type: "LOW_TO_HIGH",
                    payload: productState.products,
                  })
                }
              />
              Low to High
            </label>
            <label>
              <input
                type="radio"
                name="sort"
                onClick={() =>
                  productDispatch({
                    type: "HIGH_TO_LOW",
                    payload: productState.products,
                  })
                }
              />
              High To Low
            </label>
          </div>
          <div className="product-sort flex-column l-radius">
            <h2>Categories</h2>
            {categoryList &&
              categoryList.map((item) => (
                <label key={item._id}>
                  <input
                    type="radio"
                    name="categories"
                    onClick={() =>
                      productDispatch({
                        type: "CATEGORY_SORT",
                        payload: {
                          productState: productState,
                          item: item,
                          list: productsList,
                        },
                      })
                    }
                  />
                  {item.categoryName}
                </label>
              ))}
          </div>
          <div className="product-sort flex-column l-radius">
            <h2>Rating</h2>
            <label>
              <input
                type="radio"
                name="rating"
                value="4"
                onClick={ratingSort}
              />
              4 Stars & above
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="3"
                onClick={ratingSort}
              />
              3 Stars & above
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="2"
                onClick={ratingSort}
              />
              2 Stars & above
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="1"
                onClick={ratingSort}
              />
              1 Star & above
            </label>
          </div>
        </div>
        <div className="products-listing">
          <div className="list-container flex-row">
            {productsArray.length > 0 ? (
              productsArray.map((item) => (
                <div className="product-card m-radius" key={item._id}>
                  <div className="img-wrap"></div>
                  <img className="card-img" src={item.productImage} />
                  <div className="card-content">
                    <h3 className="cursor-pointer">{item.title}</h3>
                    <h4>???{item.price}</h4>
                  </div>
                  <button
                    className="btn btn-secondary pd-btn"
                    onClick={() =>
                      productState.cart?.map((i) => i._id).includes(item._id)
                        ? navigate("/cart")
                        : addToCart(item)
                    }
                  >
                    <i className="fa fa-bag-shopping"></i>
                    {productState.cart?.map((i) => i._id).includes(item._id)
                      ? " Cart"
                      : " Add"}
                  </button>
                  <i
                    className={` fa fa-heart icon  cursor-pointer pd-wish-icon ${
                      productState.wishlist.includes(item)
                        ? "pd_wishlisted"
                        : ""
                    }`}
                    onClick={() => {
                      productState.wishlist.includes(item)
                        ? productDispatch({
                            type: "REMOVE_FROM_WISHLIST",
                            payload: item,
                          })
                        : addToWishlist(item);
                    }}
                  ></i>
                </div>
              ))
            ) : (
              <h4 className="info-message">
                {productState.searchResult?.length == 0 &&
                productState.searchValue !== ""
                  ? "No products found for the provided search"
                  : ""}
              </h4>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductListing;
