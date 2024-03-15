// pages/products/[slug].jsx
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!slug) return; // Don't fetch if slug is not available

    fetch(`/api/products/${slug}`) // Fetch data for the specific product
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [slug]); // Re-run effect when slug changes

  if (!product) {
    return <div>Loading...</div>; // Render loading indicator while fetching data
  }

  return (
    <div>
      <h1>Product: {product.name}</h1>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Render other product details here */}
      <img src={product.imgUrl} alt={product.name} />
    </div>
  );
};

export default ProductPage;
