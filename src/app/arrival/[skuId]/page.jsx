"use client";
import React, { useState, useEffect } from "react";
import { addItem } from "@/app/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import Image from "next/image";

const Product = () => {
  const { skuId } = useParams();
  const dispatch = useDispatch();
  const [productData, setProductData] = useState(null);
  const [selectedSize, setSelectedSize] = useState(""); // State to store selected size
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/newArrival/${skuId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [skuId]);

  const handleAdd = () => {
    // Ensure a size is selected before adding to cart
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    // Include the selected size in the product data
    const productWithSize = { ...productData, size: selectedSize };
    dispatch(addItem(productWithSize));
    setShowPrompt(true);
    setTimeout(() => {
      setShowPrompt(false);
    }, 500); // Hide the prompt after 2 seconds
    setSelectedSize(""); // Reset selected size after adding to cart
  };

  // Handler for selecting size
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
        Product Details
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {productData && (
          <>
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
                Product Name: {productData.name}
              </p>
              <p className="text-xl text-green-800">
                Price: {productData.price}
              </p>
              {/* Buttons for size selection */}
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
              {showPrompt && (
                <p className="text-green-600 mt-2">Added to cart</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
