"use client";
import React, { useState, useEffect } from "react";
import Searchbar from "../Component/Searchbar1";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const router = useRouter();

  useEffect(() => {
    setLoading(true); // Set loading state to true before fetching data

    fetch("api/sneakers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false); // Set loading state to false after successful data fetch
      })
      .catch((error) => {
        setError(error); // Set error state if there's an error during fetching
        setLoading(false); // Also set loading state to false
        console.error("Error fetching products:", error);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display error message if there's an error
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Sneakers</h1>

      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
        {filteredProducts.map((product) => (
          <div
            key={product.slug}
            onClick={() => {
              router.push(`Sneakers/${product.skuId}`);
            }}
            className="bg-blue-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 relative"
            style={{ width: "250px", height: "300px" }} // Adjust width and height as needed
          >
            <Image
              src={product.imgUrl}
              alt={product.name}
              width={100}
              height={300}
              className="w-full h-40 object-cover object-center transition duration-300 transform hover:scale-105"
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
