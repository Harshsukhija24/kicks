"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Jordan1 = () => {
  const [jordan1, setJordan1] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("api/jordan1") // Replace 'api/jordan1Products' with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setJordan1(data.products))
      .catch((error) =>
        console.error("Error fetching Jordan 1 products:", error)
      );
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Jordan 1 Sneakers</h1>
      <div className="flex flex-nowrap overflow-x-auto">
        {jordan1.map((product) => (
          <div
            key={product.slug}
            onClick={() => {
              router.push(`/jordan1/${product.skuId}`);
            }}
            className="bg-blue-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 mr-4"
            style={{ minWidth: "300px" }} // Adjust the minimum width of each item
          >
            <Image
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
  );
};

export default Jordan1;
