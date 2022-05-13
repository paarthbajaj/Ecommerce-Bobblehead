import { Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import "./Cart.css";

const Cart = () => {
  const {
    productState: { cart },
    productDispatch,
    toast,
    setToast,
  } = useProductContext();
  const totalPriceCart = cart.reduce((acc, curr) => {
    acc = acc + parseInt(curr.price) * parseInt(curr.quantity);
    return acc;
  }, 0);

  return (
    <div>
      {cart.length > 0 ? (
        <main className="page-wrapper flex-row g-1">
          <div className="cart card-ui grow-1 mt-5 ml-1">
            <div className="cart-header border-bottom-1 pb-5 flex-row">
              <h2 className="grow-1">Shopping bag ({cart.length})</h2>
              <h4>Price</h4>
            </div>
            {cart &&
              cart.map((item) => (
                <div
                  className="product-cart mtb-3-4 border-bottom-1 pb-1 flex-row"
                  key={item._id}
                >
                  <img className="pd-cart-img" src={item.productImage} />
                  <div className="pd-cart-content pl-3-4 flex-column grow-1">
                    <span className="txt-5 fw-6 cursor-pointer">
                      {item.title}
                    </span>
                    <small>Eligible for FREE shipping</small>
                    <label htmlFor="quantity" className="mt-1">
                      Quantity:
                      <select
                        name="quantity"
                        id="quantity"
                        onChange={(e) =>
                          productDispatch({
                            type: "SET_PRODUCT_QUANTITY",
                            payload: { item: item, quantity: e.target.value },
                          })
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </label>
                    <span
                      className="cursor-pointer col-blue1 del-product mt-1"
                      onClick={() => {
                        productDispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        });
                        setToast({
                          ...toast,
                          showToast: true,
                          type: "alert-danger",
                          message: "Product removed from cart",
                        });
                      }}
                    >
                      Delete
                    </span>
                  </div>
                  <div className="pd-cart-price">
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-sidebar flex-column mt-5 mr-1">
            <div className="card-ui flex-column">
              <div>
                <i className="fa fa-shield col-green1 txt-4"></i>
                <span className="txt-5">100% Secure</span>
              </div>
              <span className="col-blue1">
                Original Products | Secure Payments
              </span>
            </div>
            <div className="cart-price cart card-ui">
              <p className="col-green1 fw-6">
                Your order is eligible for FREE Delivery
              </p>
              <div>
                <span className="txt-5">Subtotal ({cart.length} item):</span>
                <span className="txt-5 fw-6"> ₹{totalPriceCart}</span>
              </div>
              <button className="ecom-pri-btn mt-1">Proceed to Buy</button>
            </div>
          </div>
        </main>
      ) : (
        <div className="empty-cart page-wrapper flex-column align-center justify-center">
          <span className="txt-1">😔</span>
          <span className="h5 mt-1">
            Oops! You shopping bag is empty. Let's shop.
          </span>
          <Link to="/products">
            <button className="ecom-pri-btn mt-1">Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
