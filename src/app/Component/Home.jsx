"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Searchbar from "./Searchbar1";
import Image from "next/image";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterData, setFilterData] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("/api/Home")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredData(data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filterData === "" || product.category === filterData) // Check if product category matches filterData
    );
    setFilteredData(filteredProducts);
  }, [searchQuery, products, filterData]);

  return (
    <div className="container mx-auto bg-white">
      <h1 className="text-4xl font-bold mb-4">Home</h1>

      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div>{/* Add filter buttons or select input here */}</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {filteredData.map((product) => (
          <div
            key={product.id}
            onClick={() => {
              router.push(`/Home/${product.skuId}`);
            }}
            className=" border-none rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            style={{ width: "250px" }}
          >
            {/* Use Next.js Image component */}
            <Image
              src={product.imgUrl}
              alt={product.name}
              width={100} // Set the desired width of the image
              height={300} // Set the desired height of the image
              className="w-full h-40 object-cover object-center transition duration-300 transform hover:scale-105"
            />

            <div className="p-4">
              <h2 className="text-lg font-bold mb-2 text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600">₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
