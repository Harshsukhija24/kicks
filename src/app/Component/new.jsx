"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const New = () => {
  const [newProduct, setNewProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    fetch("api/newsneakers") // Replace 'api/newsneakers' with your actual API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch new products");
        }
        return response.json();
      })
      .then((data) => {
        setNewProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.error("Error fetching new products:", error);
      });
  }, []);

  console.log("newProduct:", newProduct); // Add this line to see what newProduct contains

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">New Sneakers</h1>
      <div className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto">
        {newProduct.map((product) => (
          <div
            key={product.slug}
            onClick={() => {
              router.push(`/newsneakers/${product.skuId}`);
            }}
            className="bg-blue-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 mr-4"
            style={{ minWidth: "300px" }}
          >
            <Image
              src={product.imgUrl}
              height={300}
              width={100}
              alt={product.name}
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

export default New;
