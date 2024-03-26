"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Women = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("api/women") // Assuming you have an API endpoint for women's products
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) =>
        console.error("Error fetching women's products:", error)
      );
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Women's Shoes</h1>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="inline-flex">
          {products.map((product) => (
            <div
              onClick={() => {
                router.push(`/women/${product.skuId}`);
              }}
              key={product.slug}
              className="bg-purple-200 rounded-lg overflow-hidden mr-4"
              style={{ width: "300px" }} // Adjust width of each item as needed
            >
              <img
                src={product.imgUrl}
                alt={product.name}
                className="w-full h-40 object-cover object-center"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{product.name}</h2>
                <p className="text-gray-800">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Women;
