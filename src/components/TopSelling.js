import "./TopSelling.css";

const TopSelling = () => {
  return (
    <div>
      <div className="top-selling">
        <h5 className="ts-h5">Top selling products of this week</h5>
        <h3 className="featured-h3">Featured Products</h3>
        <p className="ts-headline">
          Check out our top selling products of this week and get your hands on
          to these premium and high quality bobble heads in the online
          marketplace.
        </p>
        <div className="top-sell-cards flex-row">
          <div className="ts-product">
            <a href="#">
              <img
                className="ts-image"
                src="./assets/images/captain-america-bobblehead.jpg"
              />
            </a>
            <h3>
              <a href="#">Captain America</a>
            </h3>
            <h4>₹299</h4>
          </div>
          <div className="ts-product">
            <a href="#">
              <img
                className="ts-image"
                src="./assets/images/roanldo-bobblehead.jpg"
              />
            </a>
            <h3>
              <a href="#">Ronaldo</a>
            </h3>
            <h4>₹299</h4>
          </div>
          <div className="ts-product">
            <a href="#">
              <img
                className="ts-image"
                src="./assets/images/pikachu-bobblehead.jpg"
              />
            </a>
            <h3>
              <a href="#">Pikachu</a>
            </h3>
            <h4>₹299</h4>
          </div>
          <div className="ts-product">
            <a href="#">
              <img
                className="ts-image"
                src="./assets/images/ironman-bobblehead.png"
              />
            </a>
            <h3>
              <a href="#">Ironman</a>
            </h3>
            <h4>₹299</h4>
          </div>
          <div className="ts-product">
            <a href="#">
              <img
                className="ts-image"
                src="./assets/images/Shinchan-bobblehead.jpg"
              />
            </a>
            <h3>
              <a href="#">Shinchan</a>
            </h3>
            <h4>₹299</h4>
          </div>
          <div className="ts-product">
            <a href="#">
              <img
                className="ts-image"
                src="./assets/images/Naruto-bobblehead.jpg"
              />
            </a>
            <h3>
              <a href="#">Naruto</a>
            </h3>
            <h4>₹299</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
