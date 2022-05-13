import { useCategoryContext } from "../context/CategoryContext";
import { useProductContext } from "../context/ProductContext";

export const CategoryPage = () => {
  const { categoryPage } = useCategoryContext();
  const { productState, addToCart, addToWishlist } = useProductContext();
  const CategoryPageProducts = productState.products.filter(
    (i) => i.categoryName === categoryPage
  );
  return (
    <>
      <main className="page-wrapper">
        <div className="category-page-products-list">
          <div className="list-container flex-row">
            {CategoryPageProducts.map((item) => (
              <div className="product-card m-radius" key={item._id}>
                <div className="img-wrap"></div>
                <img className="card-img" src={item.productImage} />
                <div className="card-content">
                  <h3 className="cursor-pointer">{item.title}</h3>
                  <h4>₹{item.price}</h4>
                </div>
                <button
                  className="btn btn-secondary pd-btn"
                  onClick={() => addToCart(item)}
                >
                  <i className="fa fa-bag-shopping"></i>
                  Add
                </button>
                <i
                  className={` fa fa-heart icon  cursor-pointer pd-wish-icon ${
                    productState.wishlist.includes(item) ? "pd_wishlisted" : ""
                  }`}
                  onClick={() => addToWishlist(item)}
                ></i>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
