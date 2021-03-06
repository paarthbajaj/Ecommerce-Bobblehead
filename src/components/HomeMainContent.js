import "./HomeMainContent.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCategoryContext } from "../context/CategoryContext";
const HomeMainContent = () => {
  const [categoryList, setCategoryList] = useState([]);
  const { setCategoryPage } = useCategoryContext();
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
          <div
            className="single-category card-hw"
            key={item._id}
            onClick={() => setCategoryPage(item.categoryName)}
          >
            <Link to={`/category/${item.categoryName}`}>
              <img
                className="category-image card-hw"
                src={item.categoryImage}
                alt={item.categoryName}
              />
              <h4>{item.categoryName}</h4>
            </Link>
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
            <div className="ts-product" key={item._id}>
              <img className="ts-image" src={item.productImage} />
              <h3>{item.title}</h3>
              <h4>₹{item.price}</h4>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomeMainContent;
