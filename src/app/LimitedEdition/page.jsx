"use client";
import React, { useState, useEffect } from "react";
import Searchbar from "../Component/Searchbar1";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LimitedEdition = () => {
  const [limitedEditionProducts, setLimitedEditionProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("api/limitedEdition")
      .then((response) => response.json())
      .then((data) => setLimitedEditionProducts(data.products))
      .catch((error) =>
        console.error("Error fetching limited edition products:", error)
      );
  }, []);

  const filteredProducts = limitedEditionProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Limited Edition Sneakers</h1>

      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div
            onClick={() => {
              router.push(`/LimitedEdition/${product.skuId}`);
            }}
            key={product.slug}
            className=" border-none rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            style={{ width: "250px", height: "300px" }} // Adjust width and height as needed
          >
            <Image
              height={300}
              width={100}
              src={product.imgUrl}
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

export default LimitedEdition;
