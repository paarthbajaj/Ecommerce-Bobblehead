import "./HomeMainContent.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const HomeMainContent = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [topSellingProductList, setTopSellingProductList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get("/api/categories");
        setCategoryList(data.data.categories);
      } catch (err) {
        console.log(err);
      }
    })();
    (async () => {
      try {
        const topSellingListData = await axios.get("/api/products");
        setTopSellingProductList(
          topSellingListData.data.products.filter(
            (item) => item.is_topSeller === "Yes"
          )
        );
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <main className="main-content-container">
      <div className="hero-section">
        <img
          className="hero-image"
          src="/assets/images/bobblehead-banner.jpg"
          alt="banner"
        />
        <Link to="/products">
          <button className="ecom-pri-btn shop-now-btn">Shop Now</button>
        </Link>
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
        {categoryList.map((item) => (
          <div className="single-category card-hw" key={item._id}>
            {/* <a href="#"> */}
            <img
              className="category-image card-hw"
              src={item.categoryImage}
              alt={item.categoryName}
            />
            {/* </a> */}
            <h4>{item.categoryName}</h4>
          </div>
        ))}
      </div>
      <div className="top-selling">
        <h5 className="ts-h5">Top selling products of this week</h5>
        <h3 className="featured-h3">Featured Products</h3>
        <p className="ts-headline">
          Check out our top selling products of this week and get your hands on
          to these premium and high quality bobble heads in the online
          marketplace.
        </p>
        <div className="top-sell-cards flex-row">
          {topSellingProductList.map((item) => (
            //   if(item.is_topSeller==="Yes"){

            //   }
            <div className="ts-product" key={item._id}>
              <a href="#">
                <img className="ts-image" src={item.productImage} />
              </a>
              <h3>
                <a href="#">{item.title}</a>
              </h3>
              <h4>₹{item.price}</h4>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomeMainContent;
