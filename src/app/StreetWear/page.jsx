"use client";
import React, { useState, useEffect } from "react";
import Searchbar from "../Component/Searchbar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("api/streetWear")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, products]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Street Wear</h1>
      <Searchbar searchQuery={searchQuery} setSearchQuery={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.slug}
            className="bg-blue-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            style={{ width: "250px", height: "300px" }}
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

export default Home;
