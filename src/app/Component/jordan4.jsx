"use client";
import React, { useState, useEffect } from "react";

const Jordan4 = () => {
  const [jordan4Products, setJordan4Products] = useState([]);

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
      <div className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto">
        {jordan4Products.map((product) => (
          <div
            key={product.slug}
            className="bg-gray-200 rounded-lg overflow-hidden"
            style={{ minWidth: "300px" }} // Adjust the minimum width of each item
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
  );
};

export default Jordan4;
