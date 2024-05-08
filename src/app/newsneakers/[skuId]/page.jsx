"use client";
import React, { useState, useEffect } from "react";
import { addItem } from "@/app/redux/slices/cartSlice"; // Assuming `addItem` is a Redux action
import { useDispatch } from "react-redux";
import Image from "next/image";

const Product = ({ skuId }) => {
  const [productData, setProductData] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/newsneakers/${skuId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        console.log("Product data:", data); // Log fetched data
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, [skuId]);

  const handleAdd = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    const productWithSize = { ...productData, size: selectedSize };
    dispatch(addItem(productWithSize));
    setShowPrompt(true);
    setTimeout(() => {
      setShowPrompt(false);
    }, 2000); // Hide the prompt after 2 seconds
    setSelectedSize("");
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
        Product Details
      </h1>
      {productData ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-center md:justify-start">
            {productData.imgUrl && (
              <Image
                height={300}
                width={100}
                src={productData.imgUrl}
                alt="Product"
                className="w-3/5 md:w-3/5 mb-1"
              />
            )}
          </div>
          <div>
            <p className="text-xl font-semibold text-blue-800">
              Product Name: {productData.productName}
            </p>
            <p className="text-xl text-green-800">Price: {productData.price}</p>
            <div className="mt-4">
              <p className="font-semibold mb-2">Select Size:</p>
              <div className="flex gap-2">
                {productData.sizes &&
                  productData.sizes.map((size) => (
                    <button
                      key={size}
                      className={`btn ${
                        selectedSize === size
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-800"
                      } hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md`}
                      onClick={() => handleSizeChange(size)}
                    >
                      {size}
                    </button>
                  ))}
              </div>
            </div>
            <button className="btn mt-4" onClick={handleAdd}>
              Add to cart
            </button>
            {showPrompt && <p className="text-green-600 mt-2">Added to cart</p>}
          </div>
        </div>
      ) : (
        <p>{error || "Loading product data..."}</p>
      )}
    </div>
  );
};

export default Product;
