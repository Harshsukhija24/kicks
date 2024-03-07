"use client";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("api/newArrival")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
        New Arrival Sneakers
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.slug}
            className="bg-blue-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            style={{ width: "250px" }} // Adjust width as needed
          >
            <img
              src={product.imgUrl}
              alt={product.name}
              className="w-full h-40 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2 text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
