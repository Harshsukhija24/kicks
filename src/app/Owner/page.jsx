// Owner.js
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Owner = () => {
  const [owner, setOwner] = useState([]);
  const [isAdding, setIsAdding] = useState(false); // State to track adding process

  useEffect(() => {
    fetch("/api/resell")
      .then((response) => response.json())
      .then((data) => setOwner(data))
      .catch((error) => console.error("Error fetching resell data:", error));
  }, []);

  const handleAddProduct = async (slug) => {
    setIsAdding(true); // Indicate adding process in progress
    try {
      const product = owner.find((item) => item.id === slug); // Find product by ID

      if (!product) {
        console.error("Product with ID", slug, "not found");
        return; // Handle missing product gracefully (e.g., show an error message)
      }

      // POST request to add product
      const response = await fetch("/api/addresell", {
        method: "POST",
        body: JSON.stringify(product), // Send the selected product data
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error adding data to JSON file");
      }

      console.log("Data added to JSON file successfully!");

      // DELETE request to delete product
      const deleteResponse = await fetch("/api/delete", {
        method: "DELETE",
        body: JSON.stringify({ productId: slug }), // Pass product ID to delete
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!deleteResponse.ok) {
        throw new Error("Error deleting data from JSON file");
      }

      console.log("Data deleted from JSON file successfully!");

      // Clear the owner array after successfully adding and deleting the product
      setOwner([]);
    } catch (error) {
      console.error("Error during fetch:", error);
    } finally {
      setIsAdding(false); // Update adding state regardless of outcome
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Add these sneakers in website</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {owner.map((product, index) => (
          <div
            key={index}
            className="bg-blue-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            <Image
              src={product.imgUrl}
              height={300}
              width={400}
              alt={product.name}
              className="w-full h-40 object-cover object-center transition duration-300 transform hover:scale-105"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{product.productName}</h2>
              <p className="text-gray-800">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        disabled={isAdding} // Disable button during adding process
        onClick={() => handleAddProduct()} // Pass product slug
      >
        {isAdding ? "Processing..." : "Process Data"}
      </button>
    </div>
  );
};

export default Owner;
