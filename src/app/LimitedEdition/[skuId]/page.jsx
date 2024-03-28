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
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/limitedEdition/${skuId}`);
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

  const handleAdd = (product) => {
    dispatch(addItem(product));
    setShowPrompt(true);
    setTimeout(() => {
      setShowPrompt(false);
    }, 500); // Hide the prompt after 2 seconds
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
        Product Details
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {productData && (
          <>
            <div className="text-center md:text-left">
              {productData.imgUrl && (
                <Image
                  height={300}
                  width={100}
                  src={productData.imgUrl}
                  alt="Product"
                  className="mx-auto  md:mx-0 w-3/5 md:w-3/5 mb-1"
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
              <p className="text-xl text-purple-800">
                Size: {productData.size}
              </p>
              <button className="btn" onClick={() => handleAdd(productData)}>
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
