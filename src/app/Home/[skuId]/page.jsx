"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const Product = () => {
  const { skuId } = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Clear any previous errors

      try {
        const response = await fetch(`api/Home/[skuId]/${skuId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [skuId]);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
        Product Details
      </h1>
      <p>Slug: {skuId}</p>
      {productData && (
        <div>
          <p>Product Name: {productData.name}</p>
          <p>Price: {productData.price}</p>
          <p>Size: {productData.size}</p>
          {/* Add other product details as needed */}
        </div>
      )}
    </div>
  );
};

export default Product;
