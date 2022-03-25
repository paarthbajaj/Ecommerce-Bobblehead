import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="flex-row footer">
        <div className="footer-col flex-column">
          <div className="brand-logo">Quirky Face</div>
          <p>
            If you would like to experience the best and premium quality of
            quirky toys in India, you are at the right place. Quirky Face is the
            ultimate destination for all those quiry things on the shelf in your
            room.
          </p>
        </div>
        <div className="flex-column footer-col">
          <h3>Links</h3>
          <a href="./index.html">Home</a>
          <a href="#">Categories</a>
          <Link to="/products">Products</Link>
          <a href="#">Blog</a>
        </div>
        <div className="flex-column footer-col">
          <h3>Social Media</h3>
          <a className="list" href="https://twitter.com/BajajPaarth">
            Twitter
          </a>
          <a className="list" href="https://www.linkedin.com/in/paarth-bajaj/">
            Linkedin
          </a>
          <a className="list" href="https://github.com/paarthbajaj">
            Github
          </a>
        </div>
        <div className="flex-column footer-col">
          <h3>Community</h3>
          <a href="https://discord.gg/CZJ35CFB">TeamTanay Discord</a>
          <a href="https://tanaypratap.com/">Mentor's website</a>
          <a href="https://neog.camp/handbook/home">The Neog Camp</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
