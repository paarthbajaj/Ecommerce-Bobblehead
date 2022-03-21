import "./Cart.css"

const Cart = () => {
  return (
    <div>
    <main class="page-wrapper flex-row g-1">
      <div class="cart card-ui grow-1 mt-5 ml-1">
        <div class="cart-header border-bottom-1 pb-5 flex-row">
          <h2 class="grow-1">Shopping bag (1)</h2>
          <h4>Price</h4>
        </div>
        <div class="product-cart mtb-3-4 flex-row">
          <img
            class="pd-cart-img"
            src="./assets/images/ironman-bobblehead.png"
          />
          <div class="pd-cart-content pl-3-4 flex-column grow-1">
            <span class="txt-5 fw-6 cursor-pointer"
              >Ironman Bobblehead | Premium Quality | Marvel Character</span
            >
            <small>Eligible for FREE shipping</small>
            <label for="quantity" class="mt-1">
              Quantity:
              <select name="quantity" id="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10+">10+</option>
              </select>
            </label>
            <span class="cursor-pointer col-blue1 mt-1">Delete</span>
          </div>
          <div class="pd-cart-price">₹299</div>
        </div>
      </div>
      <div class="cart-sidebar flex-column mt-5 mr-1">
        <div class="card-ui flex-column">
          <div>
            <i class="fa fa-shield col-green1 txt-4"></i>
            <span class="txt-5">100% Secure</span>
          </div>
          <span class="col-blue1">Original Products | Secure Payments</span>
        </div>
        <div class="cart-price cart card-ui">
          <p class="col-green1 fw-6">
            Your order is eligible for FREE Delivery
          </p>
          <div>
            <span class="txt-5">Subtotal (1 item):</span>
            <span class="txt-5 fw-6">₹299</span>
          </div>
          <button class="ecom-pri-btn mt-1">Proceed to Buy</button>
        </div>
      </div>
    </main>
   {/* EMPTY CART */}
    <div
      class="empty-cart page-wrapper flex-column align-center justify-center"
    >
      <span class="txt-1">😔</span>
      <span class="h5 mt-1">Oops! You shopping bag is empty. Let's shop.</span>
      <a href="#">
        <button class="ecom-pri-btn mt-1">Continue Shopping</button>
      </a>
    </div></div>
  )
}

export default Cart