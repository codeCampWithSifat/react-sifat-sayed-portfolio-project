import React from "react";
import { Link } from "react-router-dom";
import "./ReviewItem.css";

const ReviewItem = ({ product ,handleRemovedProduct}) => {
  const { name, img, price, quantity, shipping } = product;
  return (
    <div className="single_review_container">
      <div className="review_img">
        <Link to="/shop">
          <img src={img} alt="" />
        </Link>
      </div>
      <div className="review_item_detail_container">
        <div className="review_item_detail">
          <p className="product_name">{name}</p>
          <p className="product_price">Price : {price}</p>
          <p className="product_rating">Shipping Charge : ${shipping}</p>
          <p className="product_rating">Quantity : ${quantity}</p>
        </div>
        <div className="deleted_button">
          <button onClick={()=> handleRemovedProduct(product)}>Deleted Item</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
