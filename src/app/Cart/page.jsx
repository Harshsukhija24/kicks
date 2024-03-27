// CartPage.jsx
"use client";
import React, { useEffect } from "react"; // Import useEffect from react
import { removeItem } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation"; // Import useRouter from next/router
import { useSession } from "next-auth/react";
import Image from "next/image";

const CartPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session } = useSession();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session]); // Add session as a dependency to useEffect

  const handleRemove = (skuId) => {
    dispatch(removeItem({ skuId: skuId }));
  };

  return (
    <div className="container mx-auto mt-8">
      <h3 className="text-3xl font-semibold mb-4">Your Cart</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              src={item.imgUrl}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl font-semibold mb-2">{item.name}</h5>
              <p className="text-gray-700 mb-2">${item.price}</p>
              <p className="text-gray-700 mb-2">Size: {item.size}</p>
              <p className="text-gray-700 mb-2">
                Quantity: {item.quantity}
              </p>{" "}
              {/* Added quantity display */}
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={() => handleRemove(item.skuId)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
