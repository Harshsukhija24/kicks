"use client";
import React, { useState, useEffect } from "react";

const LimitedEdition = () => {
  const [limitedEditionProducts, setLimitedEditionProducts] = useState([]);

  useEffect(() => {
    fetch("api/limitedEdition")
      .then((response) => response.json())
      .then((data) => setLimitedEditionProducts(data.products))
      .catch((error) =>
        console.error("Error fetching limited edition products:", error)
      );
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Limited Edition Sneakers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {limitedEditionProducts.map((product) => (
          <div
            key={product.slug}
            className="bg-blue-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            style={{ width: "250px", height: "300px" }} // Adjust width and height as needed
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

export default LimitedEdition;
