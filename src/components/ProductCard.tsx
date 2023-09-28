import React from "react";

import { NavLink } from "react-router-dom";
import {
  FaShoppingCart,
  FaRegBookmark,
  FaFireAlt,
  FaStar,
} from "react-icons/fa";
import { ProductCardProps } from "../utils/types";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const renderStarRating = (rating: number) => {
    const starRating = [];
    for (let i = 0; i < rating; i++) {
      starRating.push(<FaStar key={i} className="text-yellow-500" />);
    }
    return starRating;
  };

  return (
    <NavLink
      to={`/product/${product.id}`}
      key={product.id}
      className="productCard"
    >
      <div className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-auto productImage"
        />
        <FaShoppingCart className="absolute top-0 right-0 m-3 cursor-pointer" />
        <FaRegBookmark className="absolute top-0 right-7 m-3 cursor-pointer" />
        <FaFireAlt className="absolute top-0 left-0 m-4 productCard__fastSelling" />
      </div>
      <div className="producCard__content">
        <h3 className="productName">{product.title}</h3>
        <div className="displayStack__1">
          <div className="productPrice">${product.price}</div>
          <div className="productSales">{product.stock} Stock</div>
        </div>
        <div className="displayStack__2">
          <div className="productRating">
            {renderStarRating(product.rating)}
          </div>
          <div className="productTime">
            Discount{" "}
            <strong>
              <del>{product.discountPercentage} %</del>
            </strong>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
