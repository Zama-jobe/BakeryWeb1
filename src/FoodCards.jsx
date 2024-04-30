import React from "react";
import "./styles.css";

const FoodCard = ({ title, description, image, price }) => {
  return (
    <div className="food-card">
      <img src={image} alt={title} className="food-card-image" />
      <div className="food-card-info">
        <h2 className="food-card-title">{title}</h2>
        <p className="food-card-description">{description}</p>
        <p className="food-card-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default FoodCard;
