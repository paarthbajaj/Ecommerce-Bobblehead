import { useNavigate } from "react-router-dom";
import { useCategoryContext } from "../context/CategoryContext";
import { useProductContext } from "../context/ProductContext";

export const CategoryPage = () => {
  const { categoryPage } = useCategoryContext();
  const { productState, addToCart, addToWishlist, productDispatch } =
    useProductContext();
  const CategoryPageProducts = productState.products.filter(
    (i) => i.categoryName === categoryPage
  );
  const navigate = useNavigate();
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
                {console.log(productState.wishlist, item)}
                <i
                  className={` fa fa-heart icon  cursor-pointer pd-wish-icon ${
                    productState.wishlist.map((i) => i._id).includes(item._id)
                      ? "pd_wishlisted"
                      : ""
                  }`}
                  onClick={() =>
                    productState.wishlist.includes(item)
                      ? productDispatch({
                          type: "REMOVE_FROM_WISHLIST",
                          payload: item,
                        })
                      : addToWishlist(item)
                  }
                ></i>
                {console.log(productState.wishlist.includes(item))}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
