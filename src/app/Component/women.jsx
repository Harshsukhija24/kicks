"use client";
import Image from "next/image";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            onClick={() => {
              router.push(`/women/${product.skuId}`);
            }}
            key={product.slug}
            className="border-none rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <Image
              src={product.imgUrl}
              height={300}
              width={100}
              alt={product.name}
              className="w-full h-40 object-cover object-center transition duration-300 transform hover:scale-105"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600">₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;
