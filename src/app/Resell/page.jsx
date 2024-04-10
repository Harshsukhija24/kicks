"use client";
import React, { useState } from "react";

const generateSKU = () => {
  // Generate a random alphanumeric string for SKU ID
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 10;
  let sku = "";
  for (let i = 0; i < length; i++) {
    sku += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return sku;
};

const ResellerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    price: "",
    productName: "",
    sizes: [],
    imgUrl: "",
    slug: "", // Not used in the form submission, kept as it is
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "sizes") {
      const isChecked = e.target.checked;
      const size = e.target.value;
      let updatedSizes;
      if (isChecked) {
        updatedSizes = [...formData.sizes, size];
      } else {
        updatedSizes = formData.sizes.filter((s) => s !== size);
      }
      setFormData({ ...formData, sizes: updatedSizes });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if the imgUrl starts with http://, https://, or /
    const isValidUrl =
      formData.imgUrl.startsWith("http://") ||
      formData.imgUrl.startsWith("https://") ||
      formData.imgUrl.startsWith("/");

    // If the imgUrl is not valid, show an error message and return
    if (!isValidUrl) {
      alert("Invalid image URL. Please provide a valid URL.");
      return;
    }

    try {
      const sku = generateSKU();
      const response = await fetch("/api/formresell", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          skuId: sku,
          slug: formData.productName, // Slug seems to be undefined, I'll keep it as it is
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to add data");
      }
      console.log("Data added successfully");
      alert("Submitted successfully"); // Alert for successful submission
      setFormData({
        name: "",
        email: "",
        price: "",
        productName: "",
        sizes: [],
        imgUrl: "", // Reset form data after submission
      });
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Become a Reseller on Kick!
        </h1>
        <p className="mb-6 text-center text-gray-700">
          Are you passionate about sneakers and looking to expand your business?
          Joining Kick as a reseller could be the perfect opportunity for you.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="productName">
              Product Name:
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="price">
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Select Sizes:</label>
            <div>
              <label htmlFor="uk6" className="inline-block mr-4">
                <input
                  type="checkbox"
                  id="uk6"
                  name="sizes"
                  value="UK6"
                  checked={formData.sizes.includes("UK6")}
                  onChange={handleChange}
                />
                UK6
              </label>
              <label htmlFor="uk7" className="inline-block mr-4">
                <input
                  type="checkbox"
                  id="uk7"
                  name="sizes"
                  value="UK7"
                  checked={formData.sizes.includes("UK7")}
                  onChange={handleChange}
                />
                UK7
              </label>
              <label htmlFor="uk8" className="inline-block mr-4">
                <input
                  type="checkbox"
                  id="uk8"
                  name="sizes"
                  value="UK8"
                  checked={formData.sizes.includes("UK8")}
                  onChange={handleChange}
                />
                UK8
              </label>
              <label htmlFor="uk9" className="inline-block">
                <input
                  type="checkbox"
                  id="uk9"
                  name="sizes"
                  value="UK9"
                  checked={formData.sizes.includes("UK9")}
                  onChange={handleChange}
                />
                UK9
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="imgUrl">
              Image URL:
            </label>
            <input
              type="text"
              id="imgUrl"
              name="imgUrl"
              value={formData.imgUrl}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResellerPage;
