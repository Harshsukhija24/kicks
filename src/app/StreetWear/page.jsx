"use client";
import React, { useState, useEffect } from "react";
import Searchbar from "../Component/Searchbar1";
import { useRouter } from "next/navigation";
import Image from "next/image";

const StreetWear = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const router = useRouter();

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
            onClick={() => {
              router.push(`/StreetWear/${product.skuId}`);
            }}
            key={product.slug}
            className=" border-none rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            style={{ width: "250px", height: "300px" }}
          >
            <Image
              src={product.imgUrl}
              alt={product.name}
              height={300}
              width={100}
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

export default StreetWear;
