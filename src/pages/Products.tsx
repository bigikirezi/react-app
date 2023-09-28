import { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaRegBookmark,
  FaFireAlt,
  FaStar,
} from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import { Product } from "../utils/types";
import { useQuery } from "@tanstack/react-query";
import getProducts from "../services/getProducts";

function Products() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["productsLst"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error occurred</span>;
  }

  return (
    <div className="productList">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Available Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {data?.products?.map((product: Product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
