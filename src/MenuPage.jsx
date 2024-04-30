import React from "react";
import FoodCard from "./FoodCards";

const MenuPage = () => {
  const foodItems = [
    {
      id: 1,
      title: "Buicuits",
      description:
        "Delicious biscuits with a crispy exterior and soft, flaky interior. Perfect for breakfast or as a side with meals.",
      image:
        "https://www.biggerbolderbaking.com/wp-content/uploads/2017/02/Digestive-Biscuits-copy-1.jpg",
      price: 9.99,
    },
    {
      id: 2,
      title: "Bread",
      description:
        "Freshly baked bread with a golden crust and soft texture. Great for sandwiches or enjoying with soups and salads.",
      image:
        "https://www.allrecipes.com/thmb/CjzJwg2pACUzGODdxJL1BJDRx9Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6788-amish-white-bread-DDMFS-4x3-6faa1e552bdb4f6eabdd7791e59b3c84.jpg",
      price: 7.99,
    },

    {
      id: 3,
      title: "Sourdough bread",
      description:
        "Tangy and chewy sourdough bread with a crisp crust. Made using a traditional sourdough starter for a distinctive flavor.",
      image:
        "https://www.theperfectloaf.com/wp-content/uploads/2015/12/theperfectloaf-mybestsourdoughrecipe-title-1.jpg",
      price: 7.99,
    },

    {
      id: 4,
      title: "Croissants",
      description:
        "Flaky and buttery croissants, freshly baked to perfection. Enjoy them plain or filled with your favorite ingredients.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBpuKubINjSRMTrI8u1d6bo7lQCzM8r-WXhz_H_nZjtg&s",
      price: 7.99,
    },

    {
      id: 5,
      title: "Machroons",
      description:
        "Delicate and colorful macarons with a crisp shell and soft, chewy interior. Available in a variety of flavors to satisfy your sweet tooth.",
      image:
        "https://lh6.googleusercontent.com/proxy/qEGhuAKamIIboJPJIltWc-Jlflh8v_7_kVxf-u_v-2h2rgv8y4b3M29-rT0GrEvgyeENJdn7LY_ak_uOZeuMbrkgVrkQ465-nrrKS8fNnQQ",
      price: 7.99,
    },

    {
      id: 6,
      title: "Cookies",
      description:
        "Classic chocolate chip cookies, loaded with gooey chocolate chips and baked to perfection. A timeless treat for all ages.",
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/classic-chocolate-chip-cookies.jpg",
      price: 7.99,
    },

    {
      id: 7,
      title: "Stuffed Croissants",
      description:
        "Croissants filled with delicious savory or sweet fillings, such as ham and cheese or chocolate hazelnut. A satisfying snack or breakfast option.",
      image:
        "https://images.ctfassets.net/u41cm62nxtp7/6Fm2hMmJ6ME7WeERamOtTV/bdf9436b3c82565116355830ea97e8c4/stuffed_croissants.png?fm=webp",
      price: 7.99,
    },
    {
      id: 8,
      title: "Baget",
      description:
        "Crusty French baguette with a soft interior, perfect for sandwiches or serving alongside soups and salads. A staple of French cuisine.",
      image:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/B10F0941-3518-440D-A69F-72EFF5F7826B/Derivates/D5691ACE-1B10-42D8-8364-11402524A36D.jpg",
      price: 7.99,
    },
    {
      id: 9,
      title: "Yellow bread",
      description:
        "Sweet and fluffy yellow bread, enriched with eggs and butter for a rich flavor and golden hue. Perfect for breakfast toast or sandwiches.",
      image:
        "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/frenchs/recipes/m/800x800/mustard_challah_bread800x800.jpg?rev=c97cdcfe549449f3a3808851edaa4815&vd=20210727T191706Z&hash=F1CE23D6786F3E6ED2687FE1B86DA1E9",
      price: 7.99,
    },
    // Add more food items as needed
  ];

  return (
    <div className="menu-container">
      <div className="menu-heading">
        <h2>Our Menu</h2>
      </div>

      {/* Group food cards in rows of three */}
      {foodItems
        .reduce((rows, food, index) => {
          if (index % 3 === 0) rows.push([]);
          rows[rows.length - 1].push(food);
          return rows;
        }, [])
        .map((row, rowIndex) => (
          <div className="food-row" key={rowIndex}>
            {row.map((food) => (
              <FoodCard
                key={food.id}
                title={food.title}
                description={food.description}
                image={food.image}
                price={food.price}
                small // Add a prop to make the card smaller
              />
            ))}
          </div>
        ))}
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

export default MenuPage;
