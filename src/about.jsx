import React from "react";
import "./AboutPage.css"; // Import CSS file for AboutPage styles

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="container">
        <div className="header">
          <h1>About Us</h1>
        </div>
        <div className="content">
          <p>
            Owl Bakery is a family-owned business dedicated to crafting the
            finest artisanal pastries and baked goods. Established in 2005, we
            pride ourselves on using only the highest quality ingredients,
            sourced locally whenever possible.
          </p>
          <p>
            Our talented team of bakers works tirelessly to create delicious
            treats that delight the senses and bring joy to our customers'
            lives. From classic croissants to decadent cakes, every item in our
            bakery is made with passion and care.
          </p>
          <p>
            At Owl Bakery, we believe that baking is an art form, and we strive
            to create memorable experiences with every bite. Whether you're
            stopping by for your morning coffee or celebrating a special
            occasion, we invite you to experience the magic of Owl Bakery.
          </p>
        </div>
        <div className="image-section">
          <img
            src="https://media.licdn.com/dms/image/D4D12AQEDxty81wStTA/article-cover_image-shrink_720_1280/0/1679902526496?e=2147483647&v=beta&t=yGWXOdtTcHZS-4JmG417IPkzPE3BowytLBhI_xXc684"
            alt="Owl Bakery"
          />
        </div>
      </div>
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

export default AboutPage;
