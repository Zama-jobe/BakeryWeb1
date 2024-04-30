import React from "react";
import "./styles.css";

const HomePage = () => {
  // const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-content">
          <h1>GoodnessBakes</h1>
          <p>Where Every Crumb Tells a Delicious Story!</p>
        </div>
      </div>
      <section>
        <div className="about-section">
          <h2>Indulge in Irresistible Delights at Our Bakery</h2>
          <p>
            At our bakery, we believe in crafting more than just confections; we
            create moments of joy, memories to cherish, and flavors to savor.
            With every bite, experience the culmination of passion, skill, and
            the finest ingredients meticulously selected to delight your senses.
            From the warmth of freshly baked bread to the sweetness of decadent
            pastries, each creation tells a story of dedication and
            craftsmanship. Join us on a journey of culinary delight and discover
            the magic of our bakery, where every visit is an experience to
            remember.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Contact Us</h3>
              <p>123 Street Name, City, Country</p>
              <p>Email: example@example.com</p>
              <p>Phone: +1234567890</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
