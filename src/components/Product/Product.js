import React from "react";
import "./Product.css";

const Product = ({ product , handleAddToCart}) => {
  // console.log(product)
  const { img, name, price, seller, ratingsCount } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <p className="product_name">{name}</p>
      <p className="product_price">Price : $ {price}</p>
      <p className="product_seller">Manufacture : {seller}</p>
      <p className="product_rating">Rating : {ratingsCount}</p>
      <div className="hero_button">
        <button onClick={() => handleAddToCart(product)} className="main_button">Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
