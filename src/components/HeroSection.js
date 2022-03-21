import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div>
      <div className="hero-section">
        <img
          className="hero-image"
          src="/assets/images/bobblehead-banner.jpg"
          alt="banner"
        />
      </div>
      <div className="features-card flex-row">
        <div className="feature flex-row">
          <i className="fa fa-truck"></i>
          <div>
            <h3>Free Shipping</h3>
            <span>On all orders above ₹499</span>
          </div>
        </div>
        <hr className="divider" />
        <div className="feature flex-row">
          <i className="fa fa-phone"></i>
          <div>
            <h3>Dedicated Support</h3>
            <span>Quick response 24/7</span>
          </div>
        </div>
        <hr className="divider" />
        <div className="feature flex-row">
          <i className="fa fa-hand-holding-dollar"></i>
          <div>
            <h3>Money Back Guarantee</h3>
            <span>Worry-free shopping</span>
          </div>
        </div>
      </div>
      <div className="categories-card flex-row">
        <div className="single-category card-hw">
          <a href="#">
            <img
              className="category-image card-hw"
              src="/assets/images/marvel-bobblehead.jpg"
            />
          </a>
          <h4>Marvel</h4>
        </div>
        <div className="single-category card-hw">
          <a href="#">
            <img
              className="category-image card-hw"
              src="/assets/images/dc-bobblehead.jpg"
            />
          </a>
          <h4>DC</h4>
        </div>
        <div className="single-category card-hw">
          <a href="#">
            <img
              className="category-image card-hw"
              src="/assets/images/anime-bobblheads.jpg"
            />
          </a>
          <h4>Anime</h4>
        </div>
        <div className="single-category card-hw">
          <a href="#">
            <img
              className="category-image card-hw"
              src="/assets/images/football-bobblehead.jpg"
            />
          </a>
          <h4>Football</h4>
        </div>
        <div className="single-category card-hw">
          <a href="#">
            <img
              className="category-image card-hw"
              src="/assets/images/keychain-bobblehead.jpg"
            />
          </a>
          <h4>Keychains</h4>
        </div>
        <div className="single-category card-hw">
          <a href="#">
            <img
              className="category-image card-hw"
              src="/assets/images/pokemon-bobblehead.jpg"
            />
          </a>
          <h4>Pokemons</h4>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
