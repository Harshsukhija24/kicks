"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Jordan4 = () => {
  const [jordan4Products, setJordan4Products] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("api/jordan4") // Replace 'api/jordan4Products' with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setJordan4Products(data.products))
      .catch((error) =>
        console.error("Error fetching Jordan 4 products:", error)
      );
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Jordan 4 Sneakers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {jordan4Products.map((product) => (
          <div
            onClick={() => {
              router.push(`/jordan4/${product.skuId}`);
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

export default Jordan4;
